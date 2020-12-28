import React from 'react';
import styled from 'styled-components';
import '../../../../styles/scss/custom.scss';
// import SearchList from './SearchList';

const title = 'Unsplash Image Search';

export default function SearchBar({ onChange, term, onSubmit }) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<SearchWrapper>
				<Title>{title}</Title>
				{term && <Title>{term}</Title>}
				<Input
					placeholder='...search images'
					value={term}
					onChange={handleChange}
				/>

				<Button onClick={() => onSubmit(term)}>Submit </Button>
			</SearchWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	padding-top: 4rem;
	padding-bottom: 2rem;
	margin: 0px;
	width: 100%;
	background: papayawhip;
`;
const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'hsl(179, 44%, 55%)' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'hsl(213, 30%, 32%)')};
	font-family: Makbold;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Input = styled.input`
	padding: 0.5em;
	margin: 1em;
	color: hsl(263, 6%, 43%);
	background: white;
	border: 2px solid palevioletred;
	border-radius: 3px;
	width: 228px;
	height: 32px;
`;
const SearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-text: center;
`;
const Title = styled.h1`
	font-family: Makbold;
	text-align: center;
	font-size: 2.5rem;
`;
