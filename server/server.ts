import 'reflect-metadata';
import 'dotenv/config';
import app from './config/app';
import db from './config/database';

(async () => {
	console.log('Starting the server...');
	console.log(process.env.NODE_ENV);
	let connected = false;
	let reconnectLimit = 100;
	const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
	while (!connected && reconnectLimit) {
		try {
			const database = await db.connect();
			console.log('Server has been connected to the database...');
			if (process.env.NODE_ENV !== 'test') {
				await database.runMigrations();
			}
			connected = true;
			break;
		} catch (e) {
			console.log('Server tries reconnecting to the database...', e);
			await sleep(5000);
			reconnectLimit -= 1;
		}
	}
	if (!connected) {
		console.log('Server has not been connected to the database');
	}
	await app.start();
})();
