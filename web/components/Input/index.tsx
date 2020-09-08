import * as React from 'react';
import { FieldProps } from 'formik';

export const Input: React.SFC<FieldProps<any>> = ({ field: { onChange, ...field }, form: { touched, errors } }) => {
	const errorMsg = touched[field.name] && errors[field.name];
	return (
		<>
			<label>{field.name}</label>
			<input id={field.name} name={field.name} placeholder={field.name} type='text' onChange={onChange} />
		</>
	);
};
