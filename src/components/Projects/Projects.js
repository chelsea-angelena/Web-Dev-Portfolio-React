import React from 'react';
import './projects.scss';
import styles from './projectStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import content from './content';
import { Link, Route } from 'react-router-dom';
import { Lead, Container } from 'bootstrap-4-react';

export default function Projects() {
	return (
		<Container style={styles.projects} id='projects' fluid>
			<Container style={styles.projectsOverlay} id='projects' fluid>
				<h2 style={styles.header} className='projects__header'>
					Projects
				</h2>
				<Lead style={styles.lead}>
					Mobile Applications, developed using React-Native and Expo.
				</Lead>
				<CardGroup style={styles.list}>
					{content.map((content) => (
						<Card
							key={content.id}
							style={styles.card}
							className='projects'
							shadow='true'
							p='3'
							mb='5'
							bg='light'
							rounded='true'
						>
							<Card.Img
								variant='top'
								style={styles.image}
								src={content.image}
								alt='Project-Image'
								className='projects'
							/>
							<Card.Footer
								className='text-muted'
								style={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-around',
								}}
							>
								<Route
									path={content.projectLinkName}
									component={() => {
										window.location.href = content.projectLink;
									}}
								/>
								<Link to={content.projectLinkName}>
									<FontAwesomeIcon
										size='2x'
										icon={['fa', 'link']}
										color='black'
									/>
								</Link>

								<Route
									path={content.demolinkName}
									component={() => {
										window.location.href = content.demolink;
									}}
								/>
								<Link to={content.demolinkName} style={{ color: 'black' }}>
									<FontAwesomeIcon
										size='2x'
										icon={['fa', 'images']}
										color='black'
									/>
								</Link>

								<Route
									path={content.linkName}
									component={() => {
										window.location.href = content.link;
									}}
								/>
								<Link to={content.linkName}>
									<FontAwesomeIcon
										size='2x'
										icon={['fa', 'code']}
										color='black'
									/>
								</Link>
							</Card.Footer>
							<Card.Body>
								<Card.Title style={styles.title}>{content.title}</Card.Title>

								<Card.Text style={styles.text}>{content.text}</Card.Text>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</Container>
		</Container>
	);
}
