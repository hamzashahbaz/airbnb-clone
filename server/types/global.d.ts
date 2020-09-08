import { Redis } from 'ioredis';
import { userLoader } from '../app/loaders/user';
import { PubSub } from 'apollo-server-express';

declare global {
	interface Session extends Express.Session {
		userId?: string;
	}

	interface Context {
		redis: Redis;
		url: string;
		session: Session;
		req: Express.Request;
		userLoader: ReturnType<typeof userLoader>;
		pubsub: PubSub;
	}

	type Resolver = (parent: any, args: any, context: Context, info: any) => any;

	interface ResolverMap {
		[key: string]: {
			[key: string]: Resolver | { [key: string]: Resolver };
		};
	}
}
