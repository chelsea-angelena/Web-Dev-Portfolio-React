import React from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
import { Lead } from 'bootstrap-4-react';

const content = [
	{
		id: 1,
		tech: 'React-Native',
		tech2: '../../assets/logo-logomark.png',
		image: require('../../assets/saturday.png'),
		title: 'Saturday Market',
		text:
			'		This is a mobile application built with React-Native. It is a social application and virtual market place for selling handcrafted goods and art. Currently it has been built for ios, and will be released on an Apple Test Flight in the next few days. The Android version will be coming soon, as well as new features such as in app messaging.',
		link: 'https://github.com/chelsea-angelena/Expo-SaturdayMarket',
		linkName: '/SaturdayMarket',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/demo1',
	},
	{
		id: 2,
		tech: 'React-Native',
		tech2: 'OMDB API',
		image: require('../../assets/simulatorshot.png'),
		title: 'OMDB Movie App',
		text:
			'A movie search app, built with React-Native and the open movie database API. Search for your favorite movies and save the list to reference later',
		link: 'https://github.com/chelsea-angelena/react-native-omdb',
		linkName: '/react-native-omdb',
		demolink: 'https://chelsea-angelena.github.io',
		demolinkName: '/demo2',
	},

	{
		id: 3,
		tech: 'React-Native',
		tech2: 'Yelp API',
		image: require('../../assets/GoodEats.png'),
		title: 'Good Eats',
		text:
			'Mobile App, built with React-Native. Search for  nearby restaurants by the type of cuisine, or business name. The app will automatically use location, only after explicit permission has been granted by the user, so all search results are local. Find the hours, location, ratings and price range of restuarants near you.',
		link:
			'https://github.com/chelsea-angelena/react-native-local-restaurant-search',
		linkName: '/goodEats',
		demolink: 'https://chelsea-angelena.github.io',
		demolinkName: '/demo3',
	},
];

export default function Portfolio() {
	return (
		<div style={styles.projects}>
			<div className='projects' id='projects'>
				<h2 className='projects__header'>React-Native Projects</h2>
				<Lead style={styles.lead}>
					Projects that I have built on my own since gradutation using React-Native and Expo.
				</Lead>
				<div className='projects__card--main-div'>
					<ol className='projects__card--ol' style={styles.list}>
						{content.map((content) => (
							<div key={content.id} style={styles.cardback}>
								<Card style={styles.card} className='mb-2 text-center'>
									<Card.Img
										variant='top'
										style={styles.image}
										src={content.image}
										alt=''
										className='projects__card--img'
									/>
									<Card.Body style={styles.card}>
										<Card.Title style={styles.title}>
											{content.title}
										</Card.Title>
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
							</div>
						))}
					</ol>
				</div>
			</div>
			<div>
			</div>
		</div>
	);
}
const styles = {
	projects: {
		paddingTop: 64,
		paddingBottom: 32,
		fontFamily: 'Montserrat',
		backgroundColor: '#E0E0E0',
	},
	card: {
		maxWidth: '24rem',
		marginTop: 24,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	text: {
		fontFamily: 'Montserrat',
		fontWeight: 200,
		cursor: 'default',
		color: '#263238',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#263238',
	},
	image: {
		height: 300,
		width: '100%',
		padding: 0,
		margin: 0,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		width: 300,
	},
	lead: {
		paddingLeft: 32,
		paddingRight: 32,
		textAlign: 'center',
	},
	list: {
		backgroundColor: '#FAFAFA',
	},
	cardback: {
		paddingTop: 24,
	},
};
