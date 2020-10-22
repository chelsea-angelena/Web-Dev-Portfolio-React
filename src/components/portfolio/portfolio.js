import React from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
// import colors from '../../styles/colors';
// import Item from 'react-bootstrap/Item';

const content = [
	{
		id: 1,
		tech: 'React-Native',
		tech2: '../../assets/logo-logomark.png',
		image: require('../../assets /saturday.png'),
		title: 'Saturday Market',
		text:
			"		This is a mobile application built using react-native. It's a social app and virtual market place for selling handcrafted goods, art, etc. Currently it has been built for ios, and will be released for an Apple Test Flight in the next few days. The Android version will be coming soon, as well as new features such as in app messaging.",
		link: 'https://github.com/chelsea-angelena/SaturdayMarket',
		linkName: '/Saturday-Market',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/saturday-demo',
	},
	{
		id: 2,
		tech: 'React-Native',
		tech2: 'OMDB API',
		image: require('../../assets /simulatorshot.png'),
		title: 'OMDB Movie App',
		text:
			'Built with React Native and the open movie database API. Search for your favorite movies and save the list to reference later',
		link: 'https://github.com/chelsea-angelena/react-native-omdb',
		linkName: '/omdb-react-native',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/omdb-demo',
	},

	{
		id: 3,
		tech: 'React-Native',
		tech2: 'Yelp API',
		image: 'https://picsum.photos/320/220',
		title: 'Good Eats',
		text:
			'React-Native restaurant search App. Set to automatically use location so all search results are local. Find the hours, location, ratings and price range of restuarants near you.',
		link:
			'https://github.com/chelsea-angelena/react-native-local-restaurant-search',
		linkName: '/goodEats',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/goodEatsDemo',
	},

	{
		id: 4,
		image: 'https://placekitten.com/320/220',
		title: 'Project #4  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",
		link: 'https://github.com/chelsea-angelena/',
		linkName: '/comingsoonCode2',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/comingsoonDemo2',
	},
	{
		id: 5,
		image:
			'https://images.unsplash.com/photo-1599913824804-2d4c8a33a3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		title: 'Project #5',
		text: '	Coming Soon',

		link: 'https://github.com/chelsea-angelena/',
		linkName: '/comingsoonCode',
		demolink: 'https://chelsea-angelena.github.io/',
		demolinkName: '/comingsoonDemo',
	},
];

export default function Portfolio() {
	// function changeBackground(e) {
	// 	e.target.style.background = 'red';
	// }
	// function changeBackgroundBack(e) {
	// 	e.target.style.background = 'white';
	// }

	return (
		<div style={styles.projects}>
			<div className='projects' id='projects'>
				<h2 className='projects__header'>Featured Projects</h2>
				<div className='projects__card--main-div'>
					<ol className='projects__card--ol'>
						{content.map((content) => (
							<div key={content.id}>
								<Card style={styles.card} className='mb-2 text-center'>
									<Card.Header>{content.tech}</Card.Header>
									<div>
										<Card.Header>
											{/* <img src={require(content.tech2)} alt='' width='50px' /> */}
										</Card.Header>
										<div></div>
										<Card.Img
											variant='top'
											style={styles.image}
											src={content.image}
											alt=''
											className='projects__card--img'
										/>
										<Card.Body>
											<Card.Title style={styles.title}>
												{content.title}
											</Card.Title>
											<Card.Text style={styles.text}>{content.text}</Card.Text>
											<Card.Body></Card.Body>
										</Card.Body>
										<Card.Footer className='text-muted'>
											<Route
												path={content.demolinkName}
												component={() => {
													window.location.href = content.demolink;
												}}
											/>
											<Link
												to={content.demolinkName}
												style={{ color: 'black' }}
											>
												Demo
											</Link>
										</Card.Footer>
										<Card.Footer className='text-muted'>
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
									</div>
								</Card>

								<br />
							</div>
						))}
					</ol>
				</div>
			</div>
			<div>
				{/* <div style={styles.row}>
					<img
						src={require('../../assets/logo-logomark.png')}
						alt='logomarkFirebase'
						width='50px'
					/>
					<img
						src={require('../../assets/reactnative.png')}
						alt='reactnative'
						width='50px'
					/>

					<FontAwesomeIcon
						size='3x'
						icon={['fab', 'app-store-ios']}
						color='black'
					/>

					<FontAwesomeIcon size='2x' icon={['fab', 'android']} color='black' /> */}
				{/*
					<FontAwesomeIcon size='3x' icon={['fab', 'react']} color='black' /> */}
			</div>
		</div>
	);
}
const styles = {
	projects: {
		marginTop: 80,
		marginBottom: 80,
		paddingTop: 80,
		paddingBottom: 80,
	},
	card: {
		backgroundColor: 'white',
		maxWidth: '24rem',
		marginLeft: 24,
	},
	text: {
		fontFamily: 'Montserrat',
		fontWeight: 200,
		cursor: 'default',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	image: {
		height: 300,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		width: 300,
	},
};
