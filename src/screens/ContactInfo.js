import React from 'react';

const ContactInfo = () => (
	<div style={styles.contactForm}>
		<div style={styles.emailInput}></div>
		<div style={styles.messageInput}></div>
	</div>
);

export default ContactInfo;

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
		alignItems: 'flex-start',
	},
	button: {
		width: ' 50%',
	},
};
