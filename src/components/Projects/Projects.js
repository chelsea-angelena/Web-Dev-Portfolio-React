import React from 'react';
import './projects.scss';
import styles from './projectStyles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import VideoModal from './VideoModal';
import content from './content';
import { Lead, Container } from 'bootstrap-4-react';
import '../../components/intro/flip.scss';

export default function Projects() {
	return (
		<Container
			fluid
			id='demo'
			style={{
				paddingTop: 64,

				paddingBottom: 64,
			}}
		>
			<Card
				style={{
					paddingTop: 48,
					paddingBottom: 56,
					backgroundColor: 'rgb(91.8%, 93%, 94.1%)',
				}}
			>
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
					React-Native Mobile Applications
				</Lead>
				<Container style={styles.projects} id='projects' fluid>
					{content.map((content) => (
						<>
							<div className='card__div card__area' key={content.id.toString()}>
								<Card style={styles.card} className='projects flip-card'>
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
										<a href={content.projectLink}>
											<FontAwesomeIcon
												size='2x'
												icon={['fa', 'link']}
												color='black'
											/>
										</a>

										<a href={content.link}>
											<FontAwesomeIcon
												size='2x'
												icon={['fa', 'code']}
												color='black'
											/>
										</a>
									</Card.Footer>
								</Card>
								<div className='video__modal'>
									<VideoModal content={content} />
								</div>
							</div>
						</>
					))}
				</Container>
			</Card>
		</Container>
	);
}
