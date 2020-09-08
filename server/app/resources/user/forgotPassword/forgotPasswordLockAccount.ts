import { Redis } from 'ioredis';
import { removeAllUsersSessions } from '../../../helpers/removeAllUsersSessions';
import { User } from '../../../models/User';

export const forgotPasswordLockAccount = async (userId: string, redis: Redis) => {
	// can't login
	await User.update({ id: userId }, { forgotPasswordLocked: true });
	// remove all sessions
	await removeAllUsersSessions(userId, redis);
};
