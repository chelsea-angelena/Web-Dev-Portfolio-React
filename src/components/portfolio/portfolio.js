import React from 'react';
import './portfolio.scss';
// import '../../styles/custom.scss'

const content = [
	{
		image: 'http://lorempixel.com/320/220',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
	},
	{
		image: 'http://placeimg.com/300/200/any',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
	},
	{
		image: 'https://picsum.photos/320/220',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
	},
	{
		image: 'https://placekitten.com/320/220',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",
	},
	{
		image:
			'https://images.unsplash.com/photo-1599913824804-2d4c8a33a3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  in culpa qui officia deserunt mollit anim id est laborum.'",
	},
	{
		image:
			'https://images.unsplash.com/photo-1599918693295-76b4cc244431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=893&q=80',
		title: 'Esse cillum dolore',
		text:
			"		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'",
	},
];

// export default function Portfolio() {
// 	return (
// 		<div className='projects'>
// 			<h2 className='projects__header'>Featured Projects</h2>
// 			<div>
// 			<ol className='projects__list'>
// 				{content.map((content) => (
// 					<li key={content.title}>
// 						<div className='projects__card'>
// 							<div className='projects__card--image-div'>
// 								<img src={content.image} alt='' className='projects__card--img' />
// 								<h4 className='projects__card--header'>
// 									{content.title}
// 								</h4>
// 							</div>
// 							<div className='projects__card--text'>{content.text}</div>
// 						</div>
// 					</li>
// 				))}
// 			</ol>
// 			</div>
// 		</div>
// 	);
// }

export default function Portfolio() {
	return (
		<div className='projects' id='Projects'>
			<h2 className='projects__header'>Featured Projects</h2>
			{/* <div className="projects__card--main-div"> */}
			{/* <ol className='projects__list'> */}
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
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
