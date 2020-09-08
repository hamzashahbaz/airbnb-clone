import * as yup from 'yup';
import * as bcrypt from 'bcrypt';

import { User } from '../../../models/User';
//import { forgotPasswordLockAccount } from './forgotPasswordLockAccount';
import { createForgotPasswordLink } from './createForgotPasswordLink';
import { expiredKeyError } from './errorMessages';
import { forgotPasswordPrefix } from '../../../helpers/constants';
import { registerPasswordValidation } from './validation';
import { formatYupError } from '../../../helpers/formatError';
import { sendEmail } from '../../../helpers/sendEmail';

// 20 minutes
// lock account

const schema = yup.object().shape({
	newPassword: registerPasswordValidation,
});

export const resolvers: ResolverMap = {
	Mutation: {
		sendForgotPasswordEmail: async (_, { email }: GQL.ISendForgotPasswordEmailOnMutationArguments, { redis }) => {
			const user = await User.findOne({ where: { email } });
			if (!user) {
				return false;
				/*return [
					{
						path: 'email',
						message: userNotFoundError,
					},
				];*/
			}

			//await forgotPasswordLockAccount(user.id, redis);
			const url = await createForgotPasswordLink(process.env.FRONTEND_HOST as string, user.id, redis);
			await sendEmail(email, url, 'reset password');
			return true;
		},
		forgotPasswordChange: async (_, { newPassword, key }: GQL.IForgotPasswordChangeOnMutationArguments, { redis }) => {
			const redisKey = `${forgotPasswordPrefix}${key}`;

			const userId = await redis.get(redisKey);
			if (!userId) {
				return [
					{
						path: 'key',
						message: expiredKeyError,
					},
				];
			}

			try {
				await schema.validate({ newPassword }, { abortEarly: false });
			} catch (err) {
				return formatYupError(err);
			}

			const hashedPassword = await bcrypt.hash(newPassword, 10);

			const updatePromise = User.update(
				{ id: userId },
				{
					forgotPasswordLocked: false,
					password: hashedPassword,
				}
			);

			const deleteKeyPromise = redis.del(redisKey);

			await Promise.all([updatePromise, deleteKeyPromise]);

			return null;
		},
	},
};
