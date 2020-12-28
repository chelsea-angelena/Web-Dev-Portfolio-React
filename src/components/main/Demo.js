import React from 'react';
import EmbedMovie from '../projects/EmbedMovie';
import Layout from '../layout/Layout';
import Animate from '../animate/Animations';
export default function Demo() {
	return (
		<Layout>
			<div id='demo'>
				<Animate>
					<h1 className='demo__title'>
						Mobile Apps
						<br />
						Simulator Demo
					</h1>
				</Animate>

				<p className='demo__body'>
					These apps have been built for iOS. For demo purposes, you can run the
					app right here in the browser using the simulator.
				</p>
				<div id='demo__row'>
					<EmbedMovie />
				</div>
			</div>
		</Layout>
	);
}
