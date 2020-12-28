import React from 'react';
import { Intro, Projects, About, Demo, Contact } from '../components/main';
import { Header, Footer } from '../components/layout';
import Info from '../components/main/Info';

export default function Main() {
	return (
		<>
			<Header />
			<Intro />
			<div className='main'>
				<About />
				<Info />
				<Projects />
				<Demo />
			</div>
			<Contact />

			<Footer />
		</>
	);
}
