import React from 'react';
import './contact.scss';
import ContactForm from './contactForm';

// const contact = {
// 	title: 'Title Of Section',

// 	paragraph:
// 		"Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
// 	emailBlurb: 'email:',
// 	email: 'chelsea.angelena@gmail.com',
// 	blurb:
// 		'Use any of the links in this section, or the icons below to get in touch. You can also send me an email using this form.',
// };

export default function ContactSection() {
	return (
		<div style={styles.view} className='ContactForm'>
			<div style={styles.innerView} className='contactOverlay'>
				{/* <div style={styles.title}>{contact.title}</div>
				<div style={styles.blurb}>{contact.blurb}</div>
				<div style={styles.email}>{contact.emailBlurb}</div>
				<div style={styles.email}>{contact.email}</div>
				{/* <div style={styles.form}> */}
				<ContactForm />
			</div>
		</div>
		// </div>
	);
}

const styles = {
	view: {
		// 	width: '100%',
		// 	height: 600,
		// 	backgroundColor: 'hsl(0, 0%, 100%)',
		// 	marginTop: 40,
		// 	marginBottom: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		paddingTop: 32,
		paddingBottom: 32,
	},
	innerView: {
		width: '85%',
		paddingTop: 32,
		paddingBottom: 32,

		display: 'flex',
		alignSelf: 'center',
		alignItems: 'center',

		flexDirection: 'column',
		paddingLeft: 12,
		paddingRight: 12,
	},
	title: {
		fontFamily: 'Montserrat',
		fontWeight: 'medium',
		fontSize: 24,
		paddingTop: 24,
	},
	blurb: {
		fontFamily: 'Montserrat',
		paddingLeft: 32,
		paddingRight: 32,
		paddingTop: 32,
		textAlign: 'center',
		paddingBottom: 32,
	},
	email: {
		fontFamily: 'Montserrat',

		paddingBottom: 16,
	},
	form: {
		flexDirection: 'column',
	},
};
