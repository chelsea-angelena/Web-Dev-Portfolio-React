import React from 'react';
import './projects.scss';
import styles from './projectStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';

import content from './content';
import { Link, Route } from 'react-router-dom';
import { Lead, Container } from 'bootstrap-4-react';
import '../../components/intro/flip.scss';

export default function Projects() {
	return (
		<>
			<Container>
				<Card className='card' style={styles.projectCard}>
					<Lead style={styles.header}>Mobile Apps</Lead>
					<Lead
						style={{
							maxWidth: 500,
							alignSelf: 'center',
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							fontFamily: 'Montserrat',
						}}
					>
						Mobile Applications, built for Android and iOS, developed using
						React-Native and Expo.
					</Lead>
					<Container style={styles.projects} id='projects' fluid>
						{content.map((content) => (
							<div className='card__div card__area' key={content.id}>
								<Card
									key={content.id}
									style={styles.card}
									className='projects flip-card'
								>
									<div className='flip-card-inner'>
										<div className='flip-card-front'>
											<Card.Img
												variant='top'
												style={styles.image}
												src={content.image}
												alt='Project-Image'
												className='projects'
											/>
										</div>
										<div className='flip-card-back' style={styles.body}>
											<Card.Body style={styles.body}>
												<Card.Title style={styles.title}>
													{content.title}
												</Card.Title>

												<Card.Text style={styles.text}>
													{content.text}
												</Card.Text>
											</Card.Body>
										</div>
									</div>
									<Card.Footer
										className='text-muted'
										style={{
											width: '100%',
											display: 'flex',
											justifyContent: 'space-around',
										}}
									>
										{/* {content.sim === 'movies' ? <MovieDemoApp /> : null}
									{content.sim === 'yelp' ? <YelpDemoApp /> : null}
									{content.sim === 'market' ? <MarketDemoApp /> : null} */}
										<Route
											path={content.projectLinkName}
											component={() => {
												window.location.href = content.projectLink;
											}}
										/>

										<Link
											to={content.projectLinkName}
											style={{ marginTop: 12 }}
										></Link>
										<Route
											path={content.projectLinkName}
											component={() => {
												window.location.href = content.projectLink;
											}}
										/>
									</Card.Footer>
									<Card.Footer
										className='text-muted'
										style={{
											width: '100%',
											display: 'flex',
											justifyContent: 'space-around',
										}}
									>
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

									{/* </div> */}
								</Card>
							</div>
						))}
					</Container>
				</Card>
			</Container>
		</>
	);
}
