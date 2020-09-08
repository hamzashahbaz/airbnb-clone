import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { theme } from '../utils/theme';
import { GlobalStyles } from '../components/GlobalStyles';
import { withApollo } from '../lib/withApollo';

type Props = {
	Component: any;
	pageProps: any;
	apolloClient: any;
};

const App: React.FC<Props> = ({ Component, apolloClient, ...pageProps }) => (
	<ApolloProvider client={apolloClient}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	</ApolloProvider>
);

export default withApollo(App);
