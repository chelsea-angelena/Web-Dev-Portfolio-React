import React from 'react';
import EmbedMovie from './EmbedMovie';
import { Container, Lead, Card } from 'bootstrap-4-react';

export default function DemoSection() {
	return (
		<Container fluid id='demo' style={styles.container}>
			<Card style={styles.card}>
				<Lead style={styles.header}>Demo App</Lead>
				<Lead style={styles.lead}>
					This is a simulator build of mobile project, which was built using
					React-Native. Run the app right here in the browser. This app has been built for both iOS and Android. Check out the links in the project section for more info. 
				</Lead>
				<EmbedMovie />
			</Card>
		</Container>
	);
}

const styles = {
	card: {
		margin: 0,
		padding: 0,
		width: '100%',
		overflow: 'hidden',
		backgroundColor: '#CFD8DC',
	},
	container: {
		margin: 0,
		padding: 0,
		backgroundColor: '#CFD8DC',
		marginBottom: 64,
	},
	lead: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 24,
		paddingBotton: 24,
		textAlign: 'center',
		color: 'black',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Montserrat',
		paddingBottom: 32,
		maxWidth: 500,
	},
	header: {
		fontFamily: 'Abril Fatface',
		color: 'black',
		alignSelf: 'center',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 40,
		paddingTop: 42,
	},
};
