import * as bcrypt from 'bcrypt';
import { User } from '../../../models/User';
import { userSessionIdPrefix } from '../../../helpers/constants';

import { invalidLogin, confirmEmailError, forgotPasswordLockedError } from './errorMessages';

const errorResponse = [
	{
		path: 'email',
		message: invalidLogin,
	},
];

export const resolvers: ResolverMap = {
	Mutation: {
		login: async (_, { email, password }: GQL.ILoginOnMutationArguments, { session, redis, req }) => {
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return { errors: errorResponse };
			}

			if (!user.confirmed) {
				return {
					errors: [
						{
							path: 'email',
							message: confirmEmailError,
						},
					],
				};
			}

			if (user.forgotPasswordLocked) {
				return {
					errors: [
						{
							path: 'email',
							message: forgotPasswordLockedError,
						},
					],
				};
			}

			const valid = await bcrypt.compare(password, user.password);

			if (!valid) {
				return { errors: errorResponse };
			}

			session.userId = user.id;
			if (req.sessionID) {
				console.log(req.sessionID);
				await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
			}

			return { sessionId: req.sessionID };
		},
	},
};
