import { User } from '../../../models/User';
import { requiresAuth } from '../../../middleware/requiresAuth';

export const resolvers: ResolverMap = {
	Query: {
		me: (_, __, { session }) => {
			requiresAuth(session);
			const user = User.findOne({ where: { id: session.userId } });
			return user;
		},
	},
};
