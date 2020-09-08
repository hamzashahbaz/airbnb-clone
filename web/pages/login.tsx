import Layout from '../components/Layout';

import { Login } from '../components/User/Login';

const LoginPage = () => {
	const onFinish = () => {
		/*const {
			history,
			location: { state },
		} = this.props as any;
		if (state && state.next) {
			return history.push(state.next);
		}

		return history.push('/');*/
	};
	//const submit = () => {};
	return (
		<Layout title='Log In | Autobns - The best car marketplace'>
			<Login onFinish={onFinish} />
		</Layout>
	);
};

export default LoginPage;
