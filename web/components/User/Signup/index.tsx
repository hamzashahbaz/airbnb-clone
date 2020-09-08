import * as React from 'react';
import { Button } from '@material-ui/core';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { validUserSchema } from '@gariyaan/common';
import { NormalizedErrorMap } from '@gariyaan/controller';

import { Layout } from '../../../components/Layout';
import { InputField } from '../../shared/InputField';

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	onFinish: () => void;
	submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		return (
			<Layout>
				<Form style={{ display: 'flex' }}>
					<div style={{ width: 400, margin: 'auto' }}>
						<Field name='email' placeholder='Email' component={InputField} />
						<br />
						<Field name='password' type='password' placeholder='Password' component={InputField} />
						<br />
						<Button size='medium' variant='contained' type='submit'>
							Register
						</Button>
						<br />
						<Link to='/login'>Already have an account</Link>
					</div>
				</Form>
			</Layout>
		);
	}
}

export const RegisterView = withFormik<Props, FormValues>({
	validationSchema: validUserSchema,
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: async (values, { props, setErrors }) => {
		const errors = await props.submit(values);
		if (errors) {
			setErrors(errors);
		} else {
			props.onFinish();
		}
	},
})(C);
