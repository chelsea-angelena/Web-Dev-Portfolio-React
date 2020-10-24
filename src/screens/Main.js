import React from 'react';
import About from '../components/about/about';
import IntroFile from '../components/intro/IntroFile';
import ContactSection from './Contact';
import ClassProjects from '../components/Projects/ClassProjects';
import Projects from '../components/Projects/Projects';

function Main() {
	return (
		<>
			<div className='bg'>
				<div className='main'>
					<IntroFile />
				</div>
			</div>
			<div id='about'>
				<About />
			</div>
			<div id='projects'>
				<Projects />
				<ClassProjects />
			</div>
			<div id='projects'>
				<ContactSection />
			</div>
		</>
	);
}

export default Main;
