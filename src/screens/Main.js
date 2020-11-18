import React from 'react';
import '../styles/custom.scss';
import About from '../components/about/about';
import IntroFile from '../components/intro/IntroFile';
import ContactSection from './Contact';
import Projects from '../components/Projects/Projects';
import DemoSection from '../components/Projects/DemoSection';

function Main() {
	return (
		<>
			<div id='intro'>
				<IntroFile />
			</div>
			<div id='about'>
				<About />
			</div>
			<div id='demo'>
				<DemoSection />
			</div>
			<div id='projects'>
				<Projects />
			</div>
			<div id='contact'>
				<ContactSection />
			</div>
		</>
	);
}

export default Main;
