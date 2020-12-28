import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';
import axios from 'axios';
import ImageList from './components/ImageList';

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function UnsplashApp() {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	const handleChange = (newValue) => {
		setTerm(newValue);
	};
	const searchAPI = async (term) => {
		try {
			let res = await axios.get('https://api.unsplash.com/search/photos/', {
				headers: { Authorization: `Client-ID ${API_KEY}` },
				params: { query: term },
			});
			setResults(res.data.results);
		} catch (e) {
			setError(e);
		}
	};

	useEffect(() => {
		searchAPI('random');
	}, []);

	if (error) {
		return <p>{error.message}</p>;
	}
	return (
		<AppWrapper>
			<SearchBar term={term} onChange={handleChange} onSubmit={searchAPI} />

			{results ? <ImageList images={results} /> : null}
		</AppWrapper>
	);
}
const AppWrapper = styled.div`
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

// const Title = styled.h1`
// 	font-family: Makbold;
// 	text-align: center;
// 	font-size: 2.5rem;
// `;
