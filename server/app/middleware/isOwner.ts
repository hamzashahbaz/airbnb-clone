export const isOwner = (session: Session, userId: String) => {
	if (session.userId !== userId) {
		throw new Error('not authorized');
	}
};
