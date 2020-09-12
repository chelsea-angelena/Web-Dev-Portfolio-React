import React from 'react';
import '../whatIdo/whatIdo.scss';

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
];

export default function Portfolio() {
	return (
		<div className='card__div--project'>
			<h2 className='projects__header'>Featured Projects</h2>
			<ol className='list'>
				{content.map((content) => (
					<li key={content.title}>
						<div className='card--project'>
							<div className='image'>
								<img src={content.image} alt='' className='card__img' />
								<h4 className='card__header card__header--project'>
									{content.title}
								</h4>
							</div>
							<div className='cardBody cardBody--project'>{content.text}</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
