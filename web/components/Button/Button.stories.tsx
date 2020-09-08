import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

storiesOf('Design System/Button', module).add('with text', () => {
	return <Button color='B400'>Click me</Button>;
});
