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
			<IntroFile />

			<About />

			<DemoSection />

			<Projects />

			<ContactSection />
		</>
	);
}

export default Main;
