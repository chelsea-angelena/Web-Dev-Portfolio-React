import React from 'react';
import { Formik } from 'formik';

const form = {
	formTitle: 'Send me a message',
};

const ContactForm = () => (
	<div style={styles.contactForm}>
		<h1>{form.formTitle}</h1>
		<Formik
			initialValues={{ email: '', message: '' }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit}>
					<div style={styles.contactForm}>
						<input
							style={styles.emailInput}
							type='email'
							name='email'
							onChange={handleChange}
							placeholder='Your Email Address'
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}
						<input
							style={styles.messageInput}
							type='textarea'
							name='message'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							multiline={true}
							placeholder='Send me a Message'
						/>
						{errors.password && touched.password && errors.password}
						<button style={styles.button} type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</div>
				</form>
			)}
		</Formik>
	</div>
);

export default ContactForm;

const styles = {
	contactForm: {
		display: 'flex',
		flexDirection: 'column',
	},
	emailInput: {
		width: '60%',
		marginBottom: 24,
	},
	messageInput: {
		marginBottom: 24,
		height: 200,
		justifyContent: 'flex-start',
		alignItems: 'flexStart',
	},
	button: {
    width: ' 50%',
	},
};
