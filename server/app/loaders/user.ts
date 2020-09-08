import * as DataLoader from 'dataloader';
import { User } from '../models/User';

type BatchLoadFn = (ids: string[]) => Promise<Array<User>>;

const batchUsers: BatchLoadFn = async (ids) => {
	// 1 sql call
	// to get all users
	const users = await User.findByIds(ids);

	const userMap: { [key: string]: User } = {};
	users.forEach((u) => {
		userMap[u.id] = u;
	});

	return ids.map((id) => userMap[id]);
};

export const userLoader = () => new DataLoader<string, User>(batchUsers as any);
