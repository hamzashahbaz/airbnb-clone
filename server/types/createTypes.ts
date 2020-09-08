import { generateNamespace } from '@gql2ts/from-schema';
import * as fs from 'fs';
import * as path from 'path';

import schema from '../config/schema';

const typescriptTypes = generateNamespace('GQL', schema());

fs.writeFile(path.join(__dirname, '../types/schema.d.ts'), typescriptTypes, (err) => {
	console.log(err);
});
