import React, { useState } from 'react';
import Layout from '../layout/Layout';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onFormSubmit = (e) => {
		e.preventDefault();
		setEmail('');
		setMessage('');
	};
	return (
		<Layout>
			{/* <div className='contact'> */}
			<form name='contact' method='post' onSubmit={onFormSubmit}>
				<input type='hidden' name='form-name' value='contact' />
				<div className='field'>
					<input
						className='contact__email--input'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='email'
					/>
				</div>
				<div className='field'>
					<textarea
						rows='10'
						cols='75'
						className='contact__message'
						type='textarea'
						value={message}
						multiline='true'
						height='100px'
						size={100}
						onChange={(e) => setMessage(e.target.value)}
						placeholder='Enter a message...'
					></textarea>
				</div>
				<div>
					<button className='contact__button' type='submit'>
						Submit
					</button>
				</div>
			</form>
			{/* </div> */}
		</Layout>
	);
}
