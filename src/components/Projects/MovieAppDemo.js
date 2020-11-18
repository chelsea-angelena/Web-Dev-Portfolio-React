import React from 'react';
import Container from 'react-bootstrap/Container';
import { Display4, Lead } from 'bootstrap-4-react';

const text = {
	title: 'The Movie App',
	lead:
		'This app was built using React-Native/Expo, the Open Movie Database, Node.js/Express.js, and Firebase. The Node server communicates with the Open-Movie-Database, and Firebase/Firestore authenticates users and stores saved user data. In an effort to learn react hooks, this has been built using only hooks and functional components. This app runs on iOS, Android, and in the browser, though it is best suited for mobile.',
	TextTwo:
		'Run on Android device by scanning the QR code at the link below, or, choose "run in browser" to use the android simulator:',
	TextThree: 'To run on an iOS simulator, click the link below',
	linkName: '/andDemo',
	link: 'https://expo.io/@angelena/projects/movie-search-app',
	linkName2: '/iosDemo',
	link2:
		'https://appetize.io/app/h96ch5mct9gc05ze9fkg2g6rfg?device=iphone6s&scale=75&orientation=portrait&osVersion=13.3',
};

export default function MovieAppDemo() {
	return (
		<Container
			fluid
			style={{
				maxWidth: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Display4 style={styles.title}>{text.title}</Display4>
			<Lead style={styles.lead}>{text.lead}</Lead>
			{/* <Lead style={styles.linkText}>{text.TextTwo}</Lead> */}
			{/* <Route
				path='https://expo.io/@angelena/projects/movie-search-app'
				component={() => {
					window.location.href =
						'https://expo.io/@angelena/projects/movie-search-app';
				}}
			/>
			<Link to='https://expo.io/@angelena/projects/movie-search-app'>
				<Lead style={styles.link}>Expo Project Page</Lead>
			</Link>
			<Lead style={styles.linkText}>{text.TextThree}</Lead>

			<Route
				path='/iOS'
				component={() => {
					window.location.href =
						'https://appetize.io/app/h96ch5mct9gc05ze9fkg2g6rfg?device=iphone6s&scale=75&orientation=portrait&osVersion=13.3';
				}}
			/>
			<Link to='/iOS'>
				<Lead style={styles.link}>iOS simulator</Lead>
			</Link> */}

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
		width: 240,
		margin: 0,
		padding: 0,
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
		display: 'flex',
		alignSelf: 'center',

		padding: 8,
		backgroundColor: 'white',
		margin: 24,
		borderRadius: 4,
		maxWidth: '100%',
	},
	title: {
		alignSelf: 'center',
		textAlign: 'center',
		borderBottomStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		padding: 24,
		fontSize: 42,
		fontFamily: 'Abril Fatface',
	},
	lead: {
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 20,
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 24,
		paddingBottom: 24,
	},
	titleLead: {
		fontSize: '1.5rem',
		color: 'white',
		alignSelf: 'center',
		textAlign: 'center',
		borderBottomStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		padding: 12,
	},
	link: {
		color: 'navy',
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 20,

		paddingBottom: 12,
	},
	linkText: {
		alignSelf: 'center',
		textAlign: 'center',
		color: 'grey',
		fontSize: 20,
		paddingLeft: 64,
		paddingRight: 64,

		paddingBottom: 12,
	},
};
