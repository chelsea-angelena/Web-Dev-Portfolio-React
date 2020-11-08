import React from 'react';
import Container from 'react-bootstrap/Container';
import { Display4, Lead } from 'bootstrap-4-react';

const text = {
	title: 'Movie Search App',
	lead:
		'This app was built using React-Native/Expo, the Open Movie Database, Node.js/Express.js, and Firebase. The Node server communicates with the Open-Movie-Database, and Firebase/Firestore authenticates users and stores saved user data. In an effort to learn react hooks, this has been built using only hooks and functional components. This app runs on iOS, Android, and in the browser, though it is best suited for mobile. Currently it is published through Expo. You can check it out at the link below. To scan the QR code and access the app you will need to have the Expo-App installed on your mobile device (this is free, just search expo in the Google-Play store or AppStore). Otherwise you can use an Android simulator in the browser directly from the page.',
	linkName: '/Movie-App',
	link: 'https://expo.io/@angelena/projects/movie-search-app',
};

export default function MovieAppDemo() {
	return (
		<Container fluid>
			<Display4 style={styles.title}>{text.title}</Display4>
			<Lead style={styles.lead}>{text.lead}</Lead>

			<div style={styles.wrap}>
				<Lead style={styles.titleLead}>Screenshots</Lead>

				<div style={styles.row}>
					<div style={styles.imageWrap}>
						<img
							src={require('../../assets/OMDB/sim2.png')}
							alt=''
							style={styles.image}
						/>
					</div>
					<div style={styles.imageWrap}>
						<img
							src={require('../../assets/OMDB/sim3.png')}
							alt=''
							style={styles.image}
						/>
					</div>
					<div style={styles.imageWrap}>
						<img
							src={require('../../assets/OMDB/sim4.png')}
							alt=''
							style={styles.image}
						/>
					</div>
					<div style={styles.imageWrap}>
						<img
							src={require('../../assets/OMDB/sim5.png')}
							alt=''
							style={styles.image}
						/>
					</div>
					<div style={styles.imageWrap}>
						<img
							src={require('../../assets/OMDB/sim6.png')}
							alt=''
							style={styles.image}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}

const styles = {
	image: {
		width: 300,
	},
	wrap: {
		backgroundColor: 'hsl(10, 85%, 21%)',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		textALign: 'center',
	},
	row: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	imageWrap: {
		padding: 24,
		backgroundColor: 'white',
		margin: 24,
		borderRadius: 4,
	},
	title: {
		alignSelf: 'center',
		textAlign: 'center',
		borderBottomStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		padding: 24,
	},
	lead: {
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 20,
	},
	titleLead: {
		fontSize: '1.5rem',
		color: 'white',
		alignSelf: 'center',
		textAlign: 'center',
		borderBottomStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		padding: 24,
	},
	link: {
		color: 'black',
	},
};
