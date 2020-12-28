// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export default function ImageList({ images }) {
	return (
		<AppWrapper>
			{images && images.map((image) => <Image key={image.id} image={image} />)}
		</AppWrapper>
	);
}

const Image = ({ image }) => {
	const { links, description, urls, alt } = image;

	// const alertDownload = async () => {
	// 	await alert('Downloading Image');
	// };
	return (
		<ImageWrapper>
			<a href={links.html}>
				<img src={urls.small} alt={alt} />
			</a>
			<Blurb>{description}</Blurb>
			{/* <a href={links.download}>
				<Button onClick={alertDownload}>Download Image</Button>
			</a> */}
			<Divider />
		</ImageWrapper>
	);
};
const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	margin: 24px;
`;

const ImageWrapper = styled.div`
	margin: 24px;
`;

const Blurb = styled.p`
	padding: 16px 42px;
	font-size: 24px;
`;
const Divider = styled.div`
	width: 100%;
	display: flex;
	align-self: center;
	border: 0.5px solid grey;
`;
// const Button = styled.button`
// 	/* Adapt the colors based on primary prop */
// 	background: ${(props) => (props.primary ? 'hsl(179, 44%, 55%)' : 'white')};
// 	color: ${(props) => (props.primary ? 'white' : 'hsl(213, 30%, 32%)')};
// 	font-family: Makbold;
// 	font-size: 1em;
// 	margin: 1em;
// 	padding: 0.25em 1em;
// 	border: 2px solid palevioletred;
// 	border-radius: 3px;
// `;
