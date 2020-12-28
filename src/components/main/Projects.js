import React from 'react';
// import { Image, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import projects from '../../data/projects';
// import content from '../../data/content';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../layout/Layout';
// import VideoModal from '../projects/VideoModal';
// import styled from 'styled-components';
import Animate from '../animate/Animations';
import Gallery from './Gallery';

export default function Projects() {
	return (
		<Layout>
			<div id='projects'>
				<Animate>
					<h1 className='projects__title'>Projects</h1>
				</Animate>
				<div className='projects__grid'>
					{projects &&
						projects.map((project) => (
							<Gallery project={project} key={project.id} />
						))}
				</div>

				{/* <Demo /> */}
			</div>
		</Layout>
	);
}

// const ProjectCard = ({ item }) => {
// 	const { title, text, link, projectLink, image } = item;
// 	const [show, setShow] = useState(false);

// 	return (
// 		// <div style={{ height: 600 }}>

// 		<Card className='bg-dark text-white card-style' style={styles.card}>
// 			<Card.Img
// 				variant='top'
// 				className='image--card'
// 				// style={styles.image}
// 				// src={image}
// 				width='300px'
// 				height='300px'
// 				src={image}
// 				alt='Project-Image'
// 			/>
// 			<Card.ImgOverlay style={styles.overlay}>
// 				<a>
// 					<Card.ImgOverlay style={styles.overlay} className='projects__hover'>
// 						<Card.Title className='projects__hover'>{title}</Card.Title>
// 						<Card.Text>{text}</Card.Text>
// 					</Card.ImgOverlay>
// 				</a>
// 			</Card.ImgOverlay>
// 			{/* <HoverText className=''>dsaiodusaiodusaioduaiouda</HoverText> */}
// 		</Card>

// 		// </div>
// 	);
// };

// const styles = {
// 	// image: {
// 	// 	height: 575,
// 	// 	padding: 0,
// 	// 	margin: 0,
// 	// 	borderTopRightRadius: 24,
// 	// 	borderTopLeftRadius: 24,
// 	// 	borderRadiusLeftTop: 24,
// 	// },
// 	card: {
// 		width: 300,
// 		height: 300,
// 	},
// 	overlay: {
// 		backgroundColor: 'rgba(0, 0, 0, 0.5)',
// 		width: '100%',
// 		height: '100%',
// 	},
// };

// const Link = styled.a`
// 	display: none;
// 	:hover {
// 		display: block;
// 	}
// `;
