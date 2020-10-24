import React from 'react';
import './projects.scss';
import styles from './projectStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import content from './content';
import { Link, Route } from 'react-router-dom';
import { Container, Lead } from 'bootstrap-4-react';

export default function Projects() {
	return (
		<Container style={styles.projects} id='projects' fluid>
			<h2 style={styles.header} className='projects__header'>
				React-Native Projects
			</h2>
			<Lead style={styles.lead}>
				These are the projects that I have built since gradutation using
				React-Native and Expo.
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
						<Card.Body>
							<Card.Title style={styles.title}>{content.title}</Card.Title>

							<Card.Text style={styles.text}>{content.text}</Card.Text>
						</Card.Body>
						<Card.Footer className='text-muted' style={{ width: '100%' }}>
							<Route
								path={content.demolinkName}
								component={() => {
									window.location.href = content.demolink;
								}}
							/>
							<Link
								to={content.demolinkName}
								style={{ color: 'black' }}
								target='_blank'
							>
								Demo
							</Link>
						</Card.Footer>
						<Card.Footer className='text-muted' style={{ width: '100%' }}>
							<Route
								path={content.linkName}
								component={() => {
									window.location.href = content.link;
								}}
							/>
							<Link to={content.linkName} target='_blank'>
								<FontAwesomeIcon
									size='2x'
									icon={['fa', 'code']}
									color='black'
								/>
							</Link>
						</Card.Footer>
					</Card>
				))}
			</CardGroup>
		</Container>
	);
}
