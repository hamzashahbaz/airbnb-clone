import { getConnectionOptions, createConnection } from 'typeorm';

const connect = async () => {
	const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'test') {
		return await createConnection({
			...connectionOptions,
			name: 'default',
			synchronize: true,
			dropSchema: true,
		});
	} else {
		return await createConnection({
			...connectionOptions,
			name: 'default',
		});
	}
};

export default { connect };
