import { User } from '../../../models/User';

export const resolvers: ResolverMap = {
	Mutation: {
		confirmEmail: async (_, { id }: GQL.IConfirmEmailOnMutationArguments, { redis }) => {
			const userId = await redis.get(id);

			if (userId) {
				await User.update({ id: userId }, { confirmed: true });
				await redis.del(id);
				return true;
			} else {
				return false;
			}
		},
	},
};
