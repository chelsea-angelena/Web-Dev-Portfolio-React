import React from 'react';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import NavBar from '../components/NavBar';
// import Landing from './Landing';
import Intro from '../components/intro/intro';
import WhatIdo from '../components/whatIdo/whatIdo';
import ContactSection from './Contact';
import FooterNav from '../components/footer/footer';

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
				{/* <div>
					<WhatIdo />
				</div> */}
				<div>
					<Portfolio />
				</div>
				{/* <div>
					<ContactSection />
				</div> */}
				<div>
					<FooterNav />
				</div>
			</div>
		</>

		// </div>
	);
}

export default Main;
// const styles = {
// 	div: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		maxWidth: '100%',
// 	},
// };
