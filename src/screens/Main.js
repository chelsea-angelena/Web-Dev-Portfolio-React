import React from 'react';
import '../styles/custom.scss';
import About from '../components/about/about';
import IntroFile from '../components/intro/IntroFile';
import ContactSection from './Contact';
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
			</div>
			<div id='footer'>
				<ContactSection />
			</div>
		</>
	);
}

export default Main;
