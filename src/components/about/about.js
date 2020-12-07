import React from 'react';
import '../../styles/custom.scss';
import bio from '../../assets/bio';
import { Container, Lead, Display4, Card } from 'bootstrap-4-react';

export default function About() {
	return (
		<Container
			fluid
			id='about'
			style={{
				marginTop: 0,
				paddingTop: 64,
				marginBottom: 0,
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
				<Display4 style={styles.headerText}>{bio.header}</Display4>

				<div>
					<img
						style={styles.profile}
						alt='profile'
						width='150px'
						src={require('../../assets/profile3.png')}
					/>
				</div>

				<Lead style={styles.lead}>{bio.intro}</Lead>

				<Lead style={styles.lead}>
					<span style={styles.bold}>Credentials:</span>

					<span style={styles.lead}>
						Web Development Diploma, BrainStation, Summer 2020
					</span>
				</Lead>
			</Card>
		</Container>
	);
}
const styles = {
	profile: {
		borderRadius: 150,
		marginLeft: 24,
	},
	lead: {
		fontFamily: 'Montserrat',
		fontSize: '1rem',
		padding: 24,
		lineHeight: '2.5rem',
		maxWidth: 500,
	},
	headerText: {
		fontSize: 42,
		// display: 'flex',
		padding: 24,
		fontFamily: 'Abril Fatface',
	},
	bold: {
		fontWeight: 'bold',
		fontFamily: 'Abril Fatface',
		fontSize: '1.25rem',
	},
};
