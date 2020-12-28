import React from 'react';

import contact from '../../data/contactData';

import ContactForm from '../../components/contact/ContactForm';
import Layout from '../layout/Layout';
import Animate from '../animate/Animations';

export default function Contact() {
	return (
		<Layout>
			<div id='contact'>
				<div id='contact__overlay'>
					<Animate>
						<div className='contact__title'>{contact.title}</div>
					</Animate>
					<ContactForm />
				</div>
			</div>
		</Layout>
	);
}
