import * as connectRedis from 'connect-redis';
import * as session from 'express-session';

import { redis } from './redis';

const RedisStore = connectRedis(session as any);

export const redisSessionPrefix = 'sess:';

const store = new RedisStore({
	client: redis as any,
	prefix: redisSessionPrefix,
});

const options = {
	store: store as any,
	name: 'qid',
	secret: process.env.APP_KEY,
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
	},
} as any;

export default session(options);
