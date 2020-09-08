import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().email(),
	password: yup.string().min(5).max(255),
});

export default schema;
