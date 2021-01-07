import React from 'react';
import TechIconsLarge from '../icons/TechIconsLarge';

import Animate from '../animate/Animations';
const intro = {
	title: 'Chelsea Angelena Brown',
	caption: 'FULL STACK DEVELOPER',
	caption2: 'WEB & MOBILE APPLICATIONS',
};

export default function Intro() {
	return (
		<div id='intro'>
			<div id='intro__overlay'>
				<Animate>
					<>
						<div className='intro__title--div'>
							<h1 className='intro__title'>{intro.title}</h1>
						</div>
						<h1 className='intro__caption'> {intro.caption}</h1>

						<h1 className='intro__subtitle'>{intro.caption2}</h1>
					</>
				</Animate>

				<TechIconsLarge />
			</div>
		</div>
	);
}
