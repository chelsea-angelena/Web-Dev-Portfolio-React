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
					// overflow: 'hidden',
				}}
			>
				<iframe
					title='App'
					width='300px'
					type='iframe'
					scrolling='no'
					src='https://appetize.io/embed/h96ch5mct9gc05ze9fkg2g6rfg?device=iphone8'
				></iframe>
			</ResponsiveEmbed>
		</div>
	);
}
