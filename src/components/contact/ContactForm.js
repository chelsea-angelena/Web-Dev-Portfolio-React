import React, { useState } from 'react';
import Layout from '../layout/Layout';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		let res = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

			body: encode({ 'form-name': 'contact', email, message }),
		})
			.then(() => alert('Thank you for the message!'))
			.finally(() => {
				setEmail('');
				setMessage('');
			})
			.catch((error) => alert(error));
		console.log(res);
	};

	return (
		<Layout>
			{/* <div className='contact'> */}
			<form
				name='contact'
				data-netlify='true'
				method='post'
				onSubmit={onFormSubmit}
			>
				<input type='hidden' name='form-name' value='contact' />
				<div className='field'>
					<input
						className='contact__email--input'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						name='email'
						placeholder='email'
					/>
				</div>
				<div className='field'>
					<textarea
						rows='10'
						cols='75'
						className='contact__message'
						type='textarea'
						name='message'
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
