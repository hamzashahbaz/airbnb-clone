import * as cors from 'cors';

const options = {
	credentials: true,
	origin: process.env.NODE_ENV === 'test' ? '*' : (process.env.APP_URL as string),
} as any;

export default cors(options);
