import * as yup from 'yup';

const invalidLogin = 'invalid login';

export const loginSchema = yup.object().shape({
	email: yup.string().min(3, invalidLogin).max(255, invalidLogin).email(invalidLogin).required(),
	password: yup.string().min(3, invalidLogin).max(255, invalidLogin).required(),
});
