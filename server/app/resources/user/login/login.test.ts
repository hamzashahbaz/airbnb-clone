//import { Connection } from 'typeorm';
import * as faker from 'faker';

import { invalidLogin, confirmEmailError } from './errorMessages';
import { User } from '../../../models/User';
import { TestClient } from '../../../utils/TestClient';
//import db from '../../../../config/database';
import app from '../../../../config/app';

faker.seed(Date.now() + 1);
const email = faker.internet.email();
const password = faker.internet.password();

//const server = app.start();
process.env.TEST_HOST = `http://localhost:4000`;
const client = new TestClient(process.env.TEST_HOST as string);

let server: any;
beforeAll(async () => {
	server = await app.start();
});
afterAll(async () => {
	await server.close();
});

const loginExpectError = async (e: string, p: string, errMsg: string) => {
	const response = await client.login(e, p);

	expect(response.data).toEqual({
		login: {
			errors: [
				{
					path: 'email',
					message: errMsg,
				},
			],
			sessionId: null,
		},
	});
};

describe('login', () => {
	test('email not found send back error', async () => {
		await loginExpectError(faker.internet.email(), faker.internet.password(), invalidLogin);
	});

	test('email not confirmed', async () => {
		await client.register(email, password);

		await loginExpectError(email, password, confirmEmailError);

		await User.update({ email }, { confirmed: true });

		await loginExpectError(email, faker.internet.password(), invalidLogin);

		const response = await client.login(email, password);

		expect(response.data).toEqual({
			login: {
				errors: null,
				sessionId: response.data.login.sessionId,
			},
		});
	});
});
