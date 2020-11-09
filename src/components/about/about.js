import React from 'react';
import './about.scss';
import bio from '../../assets/bio';
import { Container, Lead, Display4 } from 'bootstrap-4-react';

export default function About() {
	return (
		<div className='about' id='About' style={styles.background}>
			<div className='about__body'>
				<div className='about__subHeader'>
					<Display4 style={styles.headerText}>{bio.header}</Display4>
				</div>
				<div className='about__divider--2'></div>
				<div>
					<img
						style={styles.profile}
						alt='profile'
						width='150px'
						src={require('../../assets/profile3.png')}
					/>
				</div>
				<div className='about__text'>
					<Container fluid>
						<Lead style={styles.lead}>{bio.intro}</Lead>
						<div className='about__divider--2'></div>
						<div className='about__stats'>
							<Container fluid>
								<Lead style={styles.lead}>
									<span className='stats__header'>Credentials:</span>
									<span className='stats__text'>
										Web Development Diploma, BrainStation, Summer 2020
									</span>
								</Lead>
							</Container>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
}
const styles = {
	profile: {
		borderRadius: 150,
		marginTop: 40,
		marginLeft: 24,
	},
	background: {
		backgroundColor: 'white',
	},
	aboutDiv: {
		maxWidth: '100%',
		borderColor: 'black',
		borderWidth: 2,
		border: 'solid',
		// padding: 32,
		// margin: 32,
	},
	lead: {
		fontFamily: 'Montserrat',
		fontSize: 16,
	},
	leadStats: {
		fontFamily: 'Montserrat',
		fontSize: 12,
		textAlign: 'left',
	},
	headerText: {
		fontFamily: 'Montserrat',
		fontSize: 32,
		maxWidth: '100%',
		paddingLeft: 24,
		paddingTop: 24,
		paddingBottom: 24,
	},
	homeButton: {
		alignSelf: 'flex-end',
		marginBottom: 24,
		position: 'fixed',
		zIndex: 3,
	},
};
