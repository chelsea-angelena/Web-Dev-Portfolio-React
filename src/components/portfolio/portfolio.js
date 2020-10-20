import React from 'react';
import './portfolio.scss';
// import '../../styles/custom.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'bootstrap-4-react';
import { Link, Route } from 'react-router-dom';

const content = [
	{
		image: require('../../assets/saturday.png'),
		title: 'Saturday Market',
		text:
			"		This is a mobile application built using react-native. It's a social app and virtual market place for selling handcrafted goods, art, etc. Currently it has been built for ios, and will be released for an Apple Test Flight in the next few days. The Android version will be coming soon, as well as new features such as in app messaging.",
		link: 'https://github.com/chelsea-angelena/Expo-Saturday-Market',
		linkName: '/B',
	},
	{
		image: require('../../assets/simulatorshot.png'),
		title: 'OMDB Movie App',
		text:
			'Built with React Native. Simple Movie search app. Save your favorite movies',
		link: 'https://github.com/chelsea-angelena/react-native-omdb-redux',
		linkName: '/C',
	},

	{
		image: 'https://picsum.photos/320/220',
		title: 'Project #3  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
		link: 'https://github.com/chelsea-angelena/',
		linkName: '/M',
	},

	{
		image: 'https://placekitten.com/320/220',
		title: 'Project #4  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",
		link: 'https://github.com/chelsea-angelena/',
		linkName: '/E',
	},
	{
		image:
			'https://images.unsplash.com/photo-1599913824804-2d4c8a33a3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		title: 'Project #5  Coming Soon',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",

		link: 'https://github.com/chelsea-angelena/',
		linkName: '/T',
	},
];

export default function Portfolio() {
	return (
		<>
			<div className='projects' id='projects'>
				<h2 className='projects__header'>Featured Projects</h2>
				<div className='projects__card--main-div'>
					<ol className='projects__card--ol'>
						{content.map((content) => (
							<li key={content.title} className='projects__card--li'>
								<div className='projects__card'>
									<div className='projects__card--image-div'>
										<img
											src={content.image}
											alt=''
											className='projects__card--img'
										/>
									</div>
									<h4 className='projects__card--header'>{content.title}</h4>
									<div className='projects__card--text'>{content.text}</div>
									<div className='projects__card--link'>
										<Route
											path={content.linkName}
											component={() => {
												window.location.href = content.link;
											}}
										/>
										<Link to={content.linkName}>
											<FontAwesomeIcon size='2x' icon={['fa', 'code']} />
										</Link>
									</div>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
}
