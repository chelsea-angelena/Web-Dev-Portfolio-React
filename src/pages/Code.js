import React, { useState, useEffect } from 'react';
import { Container, Lead } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Layout';
import NavigationBarCode from '../components/layout/NavBarCode';

export default function Code() {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 567);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 567);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});
	return (
		<>
			<NavigationBarCode />
			<Layout>
				<div>
					{isDesktop ? (
						<div id='CodeSnip1'>
							<iframe
								src='https://codesandbox.io/embed/upbeat-payne-zhvkc?autoresize=1&fontsize=14&hidenavigation=1&theme=darkview=preview'
								className='code__pen'
								title='upbeat-payne-zhvkc'
								allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
								sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
							></iframe>

							<iframe
								title='code_snippet_2'
								src='https://carbon.now.sh/embed/Uno6ch7P5lhVYtHd2Rti'
								className='code'
								style={{ overflow: 'scroll', width: '100%' }}
								sandbox='allow-scripts allow-same-origin'
							></iframe>
							{/* <div>
				<a href='https://codesandbox.io/s/upbeat-payne-zhvkc?codemirror=1&fontsize=14&hidenavigation=1&theme=dark'>
					<img
						alt='Edit zhvkc'
						src='https://codesandbox.io/static/img/play-codesandbox.svg'
					/>
				</a>
			</div> */}
						</div>
					) : (
						<Container id='code__container' fluid>
							<Lead className='code__text'>
								The embedded code editor and examples are only available on
								tablet and desktop sized screens. Please resize your screen to
								768px or greater, or, come back and visit later!
							</Lead>
							<Link to='/' href='/'>
								Go Back
							</Link>
						</Container>
					)}
				</div>
			</Layout>
			<Footer />
		</>
	);
}
