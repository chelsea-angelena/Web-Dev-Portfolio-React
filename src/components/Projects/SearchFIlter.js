import React, { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';

export default function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [phoneQuery, setPhoneQuery] = useState('');
	const [nameQuery, setNameQuery] = useState('');
	const [emailQuery, setEmailQuery] = useState('');

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.get('https://jsonplaceholder.typicode.com/users');

				let allData = res.data.filter((data) => {
					if (nameQuery) {
						return data.name.toLowerCase().includes(nameQuery.toLowerCase());
					}
					if (emailQuery) {
						return data.email.toLowerCase().includes(emailQuery.toLowerCase());
					}
					if (phoneQuery) {
						return data.phone.includes(phoneQuery.toLowerCase());
					} else {
						return data;
					}
				});
				setData(allData);
				console.log(allData);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [nameQuery, emailQuery, phoneQuery]);
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div id='search'>
			<div className='search__col-1'>
				<h1>Search</h1>
				<label name='search' className='label'>
					...by email, name, or telephone number.
				</label>

				<input
					name='search'
					className='search__input'
					onChange={(e) => setNameQuery(e.target.value)}
					value={nameQuery}
					type='text'
					placeholder='search by name'
				/>

				<input
					name='search'
					className='search__input'
					onChange={(e) => setEmailQuery(e.target.value)}
					value={emailQuery}
					type='text'
					placeholder='search by email'
				/>
				<input
					name='search'
					className='search__input'
					onChange={(e) => setPhoneQuery(e.target.value)}
					value={phoneQuery}
					type='text'
					placeholder='search by phone number'
				/>
			</div>
			<div className='search__col-2'>
				{data.map((user) => (
					<List user={user} key={user.id} />
				))}
			</div>
		</div>
	);
}

const List = ({ post, setData, user }) => {
	const { name, username, email, phone, website, company } = user;
	const { catchPhrase, bs } = company;

	return (
		<>
			<div className='contact__container'>
				<div className='contact__item'>
					<span className='bold'>Name:</span> {name}
				</div>
				<div className='contact__item'>
					<span className='bold'>UserName:</span> {username}
				</div>
				<div className='contact__item'>
					<span className='bold'>Email: </span>
					{email}
				</div>
				{/* <div>address</div> */}
				<div className='contact__item'>
					<span className='bold'>Phone: </span>
					{phone}
				</div>
				<div className='contact__item'>
					<span className='bold'>Website:</span>
					{website}
				</div>
				{/* <div>company</div> */}

				<div className='contact__item'>
					<span className='bold'>Company Name:</span>
					{company.name}
				</div>
				<div className='contact__item'>
					<span className='bold'>Busines:</span>
					{catchPhrase}
				</div>
				<div className='contact__item'>
					<span className='bold'>Catch Phrase:</span>
					{bs}
				</div>
			</div>
		</>
	);
};
