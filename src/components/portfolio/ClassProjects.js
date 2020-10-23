import React from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
import { Lead } from 'bootstrap-4-react';
// import colors from '../../styles/colors';
// import Item from 'react-bootstrap/Item';

const content = [
	// {
	// 	id: 1,
	// 	tech: 'React-Native',
	// 	tech2: '../../assets/logo-logomark.png',
	// 	image: require('../../assets/saturday.png'),
	// 	title: 'Saturday Market',
	// 	text:
	// 		"		This is a mobile application built using react-native. It's a social app and virtual market place for selling handcrafted goods, art, etc. Currently it has been built for ios, and will be released for an Apple Test Flight in the next few days. The Android version will be coming soon, as well as new features such as in app messaging.",
	// 	link: 'https://github.com/chelsea-angelena/SaturdayMarket',
	// 	linkName: '/Saturday-Market',
	// 	demolink: 'https://chelsea-angelena.github.io/',
	// 	demolinkName: '/saturday-demo',
	// },
	// {
	// 	id: 2,
	// 	tech: 'React-Native',
	// 	tech2: 'OMDB API',
	// 	image: require('../../assets/simulatorshot.png'),
	// 	title: 'OMDB Movie App',
	// 	text:
	// 		'Built with React Native and the open movie database API. Search for your favorite movies and save the list to reference later',
	// 	link: 'https://github.com/chelsea-angelena/react-native-omdb',
	// 	linkName: '/omdb-react-native',
	// 	demolink: 'https://chelsea-angelena.github.io/',
	// 	demolinkName: '/omdb-demo',
	// },

	// {
	// 	id: 3,
	// 	tech: 'React-Native',
	// 	tech2: 'Yelp API',
	// 	image: 'https://picsum.photos/320/220',
	// 	title: 'Good Eats',
	// 	text:
	// 		'React-Native restaurant search App. Set to automatically use location so all search results are local. Find the hours, location, ratings and price range of restuarants near you.',
	// 	link:
	// 		'https://github.com/chelsea-angelena/react-native-local-restaurant-search',
	// 	linkName: '/goodEats',
	// 	demolink: 'https://chelsea-angelena.github.io/',
	// 	demolinkName: '/goodEatsDemo',
	// },

	{
		id: 4,
		image: 'https://placekitten.com/320/220',
		title: 'Coming Soon',
		text:
			"You can find the code to most of my school projects through my github repository. Demo's and screenshots to follow.",
		link: 'https://github.com/chelsea-angelena/',
		linkName: 'https://github.com/chelsea-angelena/',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: 'https://chelsea-angelena.github.io/',
	},
	// {
	// 	id: 5,
	// 	image:
	// 		'https://images.unsplash.com/photo-1599913824804-2d4c8a33a3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
	// 	title: 'Project #5',
	// 	text: '	Coming Soon',

	// 	link: 'https://github.com/chelsea-angelena/',
	// 	linkName: '/comingsoonCode',
	// 	demolink: 'https://chelsea-angelena.github.io/',
	// 	demolinkName: '/comingsoonDemo',
	// },
];

export default function ClassProjects() {
	return (
		<div style={styles.projects}>
			<div className='projects' id='projects'>
				<h2 className='projects__header'>School Projects</h2>
				<Lead style={styles.lead}>
					Projects from the Web Development Diploma course at BrainStation May
					2020-Aug 2020.
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
										<Link to={content.demolinkName} style={{ color: 'black' }}>
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
										<Link to={content.linkName}>
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
			<div></div>
		</div>
	);
}
const styles = {
	projects: {
		paddingTop: 64,
		paddingBottom: 32,
		fontFamily: 'Montserrat',
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
		backgroundColor: '#E0E0E0',
	},
};
