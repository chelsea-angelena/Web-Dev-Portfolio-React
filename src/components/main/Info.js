import React from 'react';
import Layout from '../layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Animate from '../animate/Animations';
import FadeAnimation from '../animate/Animations';
const skills = [
	{
		id: '1',
		icon: ['fab', 'react'],
		skill: 'Front-End Architecture',
		list: [
			'HTML5',
			'CSS3',
			'SCSS/SASS',
			'JavaScript',
			'React.js',
			'React-Native',
		],
	},

	{
		id: '2',
		icon: ['fa', 'server'],
		skill: 'Server-Side Scripting',
		list: ['Node.js', 'Express.js', 'Firebase', 'OAuth', 'Passport.js'],
	},
	{
		id: '3',
		icon: ['fa', 'database'],
		skill: 'Database Integration',
		list: ['MySql', 'MongoDB', 'GraphQL', 'Firestore'],
	},
];

function Info() {
	return (
		<Layout>
			<div id='info'>
				<div className='info__col'>
					<Animate>
						<h1 className='info__title'>Skills</h1>
					</Animate>
					<div className='info__row'>
						{skills.map((skill, i) => (
							<FadeAnimation>
								<SkillItem item={skill} key={i} />
							</FadeAnimation>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Info;
const SkillItem = ({ item }) => {
	const { skill, list, icon } = item;

	return (
		<div className='info'>
			<div id='overlay__info'>
				<div className='info__icon--div'>
					<FontAwesomeIcon
						size='6x'
						className='info__icon'
						icon={icon}
						color='black'
					/>
				</div>
				<h1 className='info__skill'>{skill}</h1>
				<div className='info__list'>
					{list.map((item, i) => (
						<ListItem item={item} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

const ListItem = ({ item }) => {
	return (
		<ul className='info__list--list'>
			<li className='info__list--item'>{item}</li>
		</ul>
	);
};
