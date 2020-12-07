import React from 'react';

import '../../styles/custom.scss';

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export default function EmbedMovie() {
	return (
		<div id='embed'>
			<ResponsiveEmbed
				style={{
					width: '100%',
					height: 700,
					alignItems: 'center',
					alignSelf: 'center',
					justifyContent: 'center',
					margin: 0,
					padding: 0,
					overflow: 'hidden',
				}}
			>
				<iframe
					title='App'
					width='310px'
					type='iframe'
					scrolling='no'
					src="https://appetize.io/embed/1jnkqckwppcz8na7uzchc7df88?device=iphone6s&scale=75&orientation=portrait&osVersion=13.3"
				></iframe>
			</ResponsiveEmbed>
		</div>
	);
}
