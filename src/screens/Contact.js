import React from 'react';
import './contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from './contactData';
import { Jumbotron, Container } from 'bootstrap-4-react';

export default function ContactSection() {
	return (
		<Jumbotron id='contact' fluid className='jumbo'>
			<div id='overlay' style={{ width: '100%', margin: 0, padding: 0 }}>
				<Container
					fluid
					id='contact__body'
					className='contact'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div className='contact__title'>{contact.title}</div>
					<div className='contact__blurb'>{contact.blurb}</div>
					<div className='contact__blurb'>{contact.emailBlurb}</div>
					<div className='contact__blurb'>{contact.email}</div>

					<div className='navBarIcons'>
						<a
							rel='noopener noreferrer'
							href='https://www.linkedin.com/in/chelsea-a-brown'
							className='contact__nav'
						>
							<FontAwesomeIcon
								className='contact__nav--icon'
								size='3x'
								icon={['fab', 'linkedin-in']}
							/>
						</a>
						<a
							rel='noopener noreferrer'
							href='https://github.com/chelsea-angelena'
							className='contact__nav'
						>
							<FontAwesomeIcon
								className='contact__nav--icon'
								size='3x'
								icon={['fab', 'github']}
							/>
						</a>
						<a
							rel='noopener noreferrer'
							href='@mailto:chelsea.angelena@gmail.com'
							className='contact__nav'
						>
							<FontAwesomeIcon
								className='contact__nav--icon'
								size='3x'
								icon={['far', 'envelope']}
							/>
						</a>
					</div>
				</Container>
			</div>
		</Jumbotron>
	);
}
