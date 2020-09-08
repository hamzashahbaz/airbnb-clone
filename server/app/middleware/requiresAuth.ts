/*export const requiresAuth = async (resolver: Resolver, parent: any, args: any, context: any, info: any) => {
	return resolver(parent, args, context, info);
};*/

export const requiresAuth = (session: Session) => {
	if (!session.userId) {
		throw new Error('not authenticated');
	}
};
