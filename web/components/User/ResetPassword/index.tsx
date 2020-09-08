import * as React from 'react';
import { Button } from '@material-ui/core';
import { withFormik, FormikProps, Field, Form } from 'formik';
import { NormalizedErrorMap, ForgotPasswordChangeMutationVariables } from '@gariyaan/controller';
import { changePasswordSchema } from '@gariyaan/common';

import { InputField } from '../../shared/InputField';

interface FormValues {
	newPassword: string;
}

interface Props {
	onFinish: () => void;
	token: string;
	submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		return (
			<>
				<h1>Reset Password</h1>
				<Form style={{ display: 'flex' }}>
					<div style={{ width: 400, margin: 'auto' }}>
						<Field name='newPassword' type='password' placeholder='New Password' component={InputField} />
						<br />
						<br />
						<Button size='medium' variant='contained' type='submit'>
							Change password
						</Button>
					</div>
				</Form>
			</>
		);
	}
}

export const ChangePasswordView = withFormik<Props, FormValues>({
	validationSchema: changePasswordSchema,
	mapPropsToValues: () => ({ newPassword: '' }),
	handleSubmit: async ({ newPassword }, { props, setErrors }) => {
		const errors = await props.submit({ newPassword, key: props.token });
		if (errors) {
			setErrors(errors);
		} else {
			props.onFinish();
		}
	},
})(C);
