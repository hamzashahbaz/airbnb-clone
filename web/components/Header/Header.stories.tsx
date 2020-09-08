import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalHeader } from './index';

storiesOf('Design System/Navbar', module).add('Global', () => {
	return <GlobalHeader />;
});
