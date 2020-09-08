import * as React from 'react';
import { Section, Container, Nav, NavItem } from './styled';

type Props = {};

export const GlobalHeader = ({}: Props) => (
	<Section>
		<Container>
			<NavItem href='/'>
				{/*<Logo src='/images/logo.svg' />*/}
				Autobns
			</NavItem>
			<Nav>
				<NavItem href='/listing/create'>List your car</NavItem>
				<NavItem href='/signup'>Sign up</NavItem>
				<NavItem href='/login'>Log in</NavItem>
			</Nav>
		</Container>
	</Section>
);
