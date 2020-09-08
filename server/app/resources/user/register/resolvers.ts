import { User } from '../../../models/User';
import { formatYupError } from '../../../helpers/formatError';
import ValidationSchema from './validation';
import { duplicateEmail } from './errors';
import { createConfirmEmailLink } from './createConfirmEmailLink';
import { sendEmail } from '../../../helpers/sendEmail';

export const resolvers: ResolverMap = {
	Mutation: {
		register: async (_, args: GQL.IRegisterOnMutationArguments, { redis, url }) => {
			//console.log(args);
			try {
				await ValidationSchema.validate(args, { abortEarly: false });
			} catch (err) {
				//console.log(err);
				return formatYupError(err);
			}

			const { email, password } = args;

			const exists = await User.findOne({
				where: { email },
				select: ['id'],
			});

			if (exists) {
				return [
					{
						path: 'email',
						message: duplicateEmail,
					},
				];
			}

			const user = User.create({
				email,
				password,
			});

			await user.save();

			if (process.env.NODE_ENV !== 'test') {
				await sendEmail(email, await createConfirmEmailLink(url, user.id, redis), 'confirm email');
			}

			return null;
		},
	},
};
