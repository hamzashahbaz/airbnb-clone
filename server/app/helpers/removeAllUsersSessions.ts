import { Redis } from 'ioredis';
import { userSessionIdPrefix, redisSessionPrefix } from './constants';

export const removeAllUsersSessions = async (userId: string, redis: Redis) => {
	const sessionIds = await redis.lrange(`${userSessionIdPrefix}${userId}`, 0, -1);

	const promises = [] as any;
	// tslint:disable-next-line:prefer-for-of
	for (let i = 0; i < sessionIds.length; i += 1) {
		promises.push(redis.del(`${redisSessionPrefix}${sessionIds[i]}` as any) as any);
	}
	await Promise.all(promises);
};
