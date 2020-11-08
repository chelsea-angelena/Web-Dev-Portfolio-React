import React from 'react';
import Container from 'react-bootstrap/Container';
import { Display4, Lead } from 'bootstrap-4-react';

const text = {
	title: 'Saturday Market',
	lead:
		"This is a mobile app which runs in both ios and android. Saturday Market is a virtual meeting place for people to get together 'weekend-market-style' to sell handcrafted goods, works of art, or second hand treasures. Scan the QR code on your mobile phone, or run it in the browser with the simulator. Make a post, update your profile, and save favorite posts. User authentication and database has been created with Firebase/Firestore and the app has been built entirely using react functional components and hooks, on the React-Native/Expo framework.",
	linkName: '/saturdaymarket',
	link: 'https://expo.io/@angelena/projects/saturdaymarket',
};

const photos = {
	photo1: require('../../assets/Market/M1.png'),
	photo2: require('../../assets/Market/M2.png'),
	photo3: require('../../assets/Market/M3.png'),
	photo4: require('../../assets/Market/M4.png'),
	photo5: require('../../assets/Market/M5.png'),
	photo6: require('../../assets/Market/M6.png'),
	photo7: require('../../assets/Market/M7.png'),
	photo8: require('../../assets/Market/M8.png'),
	photo9: require('../../assets/Market/M9.png'),
	photo10: require('../../assets/Market/M10.png'),
	photo11: require('../../assets/Market/M11.png'),
};

export default function MarketDemo() {
	return (
		<Container fluid>
			<Display4 style={styles.title}>{text.title}</Display4>
			<Lead style={styles.lead}>{text.lead}</Lead>
			<div style={styles.wrap}>
				<Lead style={styles.titleLead}>Screenshots</Lead>

				<div style={styles.row}>
					<div style={styles.imageWrap}>
						<img src={photos.photo1} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo2} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo3} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo4} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo5} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo6} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo7} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo8} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo9} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo10} alt='' style={styles.image} />
					</div>
					<div style={styles.imageWrap}>
						<img src={photos.photo11} alt='' style={styles.image} />
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
		backgroundColor: 'hsl(36, 72%, 56%)',
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
