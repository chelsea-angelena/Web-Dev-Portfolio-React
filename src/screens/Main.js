import React from 'react';
import '../styles/custom.scss';
import About from '../components/about/about';
import IntroFile from '../components/intro/IntroFile';
import ContactSection from './Contact';
import ClassProjects from '../components/Projects/ClassProjects';
import Projects from '../components/Projects/Projects';

function Main() {
	return (
		<>
			<IntroFile />

			<div id='about'>
				<About />
			</div>
			<div id='projects'>
				<Projects />
				<ClassProjects />
			</div>
			<div id='footer'>
				<ContactSection />
			</div>
		</>
	);
}

export default Main;
