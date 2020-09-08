import * as React from 'react';
import { withFormik, FormikProps, Field, Form } from 'formik';
import Link from 'next/link';

import { Input } from '../../Input';
import { loginSchema } from './validation';

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	onFinish: () => void;
	//submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		return (
			<div>
				<div>
					<h2>Sign in to your account</h2>
				</div>
				<Form style={{ display: 'flex' }}>
					<div style={{ width: 400, margin: 'auto' }}>
						<Field name='email' placeholder='Email' component={Input} />
						<br />
						<Field name='password' type='password' placeholder='Password' component={Input} />
						<br />
						<div>
							<Link href='/forgot-password' passHref>
								<a>Forgot password</a>
							</Link>
						</div>
						<div>
							<button type='submit'>Log In</button>
						</div>
						<div>
							<Link href='/register' passHref>
								<a>Create an Account</a>
							</Link>
						</div>
					</div>
				</Form>
			</div>
		);
	}
}

export const Login = withFormik<Props, FormValues>({
	validationSchema: loginSchema,
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: async (values, { props, setErrors }) => {
		const errors = ''; //await props.submit(values);
		if (errors) {
			setErrors(errors);
		} else {
			props.onFinish();
		}
	},
})(C);
