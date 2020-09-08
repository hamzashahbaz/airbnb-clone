import * as React from 'react';
import { Button } from '@material-ui/core';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { NormalizedErrorMap } from '@gariyaan/controller';

import { InputField } from '../../shared/InputField';

interface FormValues {
	email: string;
}

interface Props {
	onFinish: () => void;
	submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		return (
			<>
				<h1>Forgot Password</h1>
				<Form style={{ display: 'flex' }}>
					<div style={{ width: 400, margin: '100px auto' }}>
						<Field name='email' placeholder='Email' component={InputField} />
						<br />
						<br />
						<Button size='medium' variant='contained' type='submit'>
							Send me Instructions
						</Button>
					</div>
				</Form>
			</>
		);
	}
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
	mapPropsToValues: () => ({ email: '' }),
	handleSubmit: async (values, { props, setErrors }) => {
		const errors = await props.submit(values);
		if (errors) {
			setErrors(errors);
		} else {
			props.onFinish();
		}
	},
})(C);
