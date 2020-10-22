import React from 'react';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import NavBar from '../components/NavBar';
import Intro from '../components/intro/intro';
// import FooterNav from '../components/footer/footer';
import ContactSection from './Contact';
import ClassProjects from '../components/portfolio/ClassProjects';

function Main() {
	return (
		// <div style={styles.div}>
		<>
			<div className='bg'>
				<div className='main'>
					<NavBar />
					<Intro />
				</div>
			</div>
			<div>
				<div id='about'>
					<About />
				</div>
				<div id='projects'>
					<Portfolio />
					<ClassProjects />
				</div>
				<ContactSection />
			</div>
		</>
	);
}

export default Main;
