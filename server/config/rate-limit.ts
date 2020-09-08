import * as RateLimit from 'express-rate-limit';
import * as RateLimitRedisStore from 'rate-limit-redis';

import { redis } from './redis';

const store = new RateLimitRedisStore({
	client: redis,
});

export const limiter = new RateLimit({
	store,
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
	delayMs: 0, // disable delaying - full speed until the max limit is reached
} as any);
