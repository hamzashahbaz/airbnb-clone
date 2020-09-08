import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as http from 'http';
//import { RedisPubSub } from 'graphql-redis-subscriptions';

import schema from './schema';
import { redis } from './redis';
import cors from './cors';
import session from './session';
import { limiter } from './rate-limit';
import { userLoader } from '../app/loaders/user';

/**
 * Bootstrap the server with all the services
 */
const start = async () => {
	// Clear redis store
	process.env.NODE_ENV === 'test' && (await redis.flushall());

	/*const pubsub = new RedisPubSub(
		process.env.NODE_ENV === 'production'
			? {
					connection: process.env.REDIS_URL as any,
			  }
			: {
					publisher: redis,
					subscriber: redis,
			  }
	);*/
	// GraphQL Server
	const apolloServer = new ApolloServer({
		subscriptions: {
			path: '/',
		},
		schema: schema() as any,
		context: ({ req }) => ({
			redis,
			url: req ? req.protocol + '://' + req.get('host') : '',
			session: req ? req.session : undefined,
			req,
			userLoader: userLoader(),
			//pubsub,
		}),
	});

	// Express server
	const app = express();

	// Cross-origin resource sharing
	app.use(cors);

	// Rate Limiting
	app.use(limiter);

	// Authentication
	app.use(session);

	apolloServer.applyMiddleware({ app, cors: false, path: '/' });

	const port = process.env.APP_PORT;

	// Http Server
	const httpServer = http.createServer(app);

	// Listen to the server
	const server = await httpServer.listen(port);
	apolloServer.installSubscriptionHandlers(server);

	console.log(`🚀 Server ready at ${process.env.APP_URL}${apolloServer.graphqlPath}`);
	console.log(`🚀 Subscriptions ready at ws://localhost:${port}${apolloServer.subscriptionsPath}`);

	return server;
};

export default { start };
