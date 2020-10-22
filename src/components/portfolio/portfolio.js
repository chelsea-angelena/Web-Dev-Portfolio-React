import React from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
// import colors from '../../styles/colors';
// import Item from 'react-bootstrap/Item';

const content = [
	{
		image: require('../../assets/saturday.png'),
		title: 'Saturday Market',
		id: 1,
		text:
			"		This is a mobile application built using react-native. It's a social app and virtual market place for selling handcrafted goods, art, etc. Currently it has been built for ios, and will be released for an Apple Test Flight in the next few days. The Android version will be coming soon, as well as new features such as in app messaging.",
		link: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		linkName: '/B',
		demolink: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		demolinkName: '/B2',
	},
	{
		id: 2,
		image: require('../../assets/simulatorshot.png'),
		title: 'OMDB Movie App',
		text:
			'Built with React Native. Simple Movie search app. Save your favorite movies',
		link: 'https://github.com/chelsea-angelena/react-native-omdb-redux',
		linkName: '/C',
		demolink: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		demolinkName: '/C2',
	},

	{
		id: 3,
		image: 'https://picsum.photos/320/220',
		title: 'Project #3  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
		link: 'https://github.com/chelsea-angelena/',
		linkName: '/M',
		demolink: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		demolinkName: '/M2',
	},

	{
		id: 4,
		image: 'https://placekitten.com/320/220',
		title: 'Project #4  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",
		link: 'https://github.com/chelsea-angelena/',
		linkName: '/E',
		demolink: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		demolinkName: '/E2',
	},
	{
		id: 5,
		image:
			'https://images.unsplash.com/photo-1599913824804-2d4c8a33a3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		title: 'Project #5  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",

		link: 'https://github.com/chelsea-angelena/',
		linkName: '/T',
		demolink: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		demolinkName: '/T2',
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
									<div>
										<Card.Header>Featured</Card.Header>
										<Card.Img
											variant='top'
											src={content.image}
											alt=''
											className='projects__card--img'
										/>
										<Card.Body>
											<Card.Title>{content.title}</Card.Title>
											<Card.Text>{content.text}</Card.Text>
											<Card.Body></Card.Body>
										</Card.Body>
										<Card.Footer className='text-muted'>
											<Route
												path={content.linkName}
												component={() => {
													window.location.href = content.link;
												}}
											/>
											<Link to={content.linkName}>Demo</Link>
										</Card.Footer>
										<Card.Footer className='text-muted'>
											<Route
												path={content.demolinkName}
												component={() => {
													window.location.href = content.demolink;
												}}
											/>
											<Link to={content.demolinkName}>
												<FontAwesomeIcon size='2x' icon={['fa', 'code']} />
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
};
