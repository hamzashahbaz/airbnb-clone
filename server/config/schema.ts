import * as path from 'path';
import * as glob from 'glob';
import * as fs from 'fs';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = () => {
	const pathToModules = path.join(__dirname, '../app/resources');
	const typeDefArray = glob.sync(`${pathToModules}/**/*.graphql`).map((x) => fs.readFileSync(x, { encoding: 'utf8' }));
	const resloverArray = glob.sync(`${pathToModules}/**/resolvers.?s`).map((resolver) => require(resolver).resolvers);

	const typeDefs = mergeTypeDefs(typeDefArray);
	const resolvers = mergeResolvers(resloverArray);

	return makeExecutableSchema({
		typeDefs,
		resolvers,
	});
};

export default schema as any;
