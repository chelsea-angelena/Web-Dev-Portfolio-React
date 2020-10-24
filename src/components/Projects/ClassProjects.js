import React from 'react';
import './projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './projectStyles.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, Route } from 'react-router-dom';
import { Container, Lead } from 'bootstrap-4-react';
import content from './schoolcontent.js';

export default function ClassProjects() {
	return (
		<Container style={styles.projectsClass} id='projects' fluid>
			<h2 style={styles.header} className='projects__header'>
				School Projects
			</h2>
			<Lead style={styles.lead}>
				Projects from the recent Web Development Program at BrainStation
			</Lead>
			<CardGroup style={styles.list}>
				{content.map((content) => (
					<Card key={content.id} style={styles.card} className='projects'>
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
