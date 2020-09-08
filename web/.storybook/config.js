/*import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
configure(require.context('../components', true, /\.stories\.tsx?$/), module);*/

import { addDecorator, configure } from '@storybook/react';

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

const req = require.context('../components', true, /\.stories\.tsx$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

const withGlobal = (cb) => (
	<React.Fragment>
		<ThemeProvider theme={theme}>{cb()}</ThemeProvider>
	</React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
