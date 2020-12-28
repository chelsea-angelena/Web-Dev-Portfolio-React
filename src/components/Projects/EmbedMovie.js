import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import { Lead } from 'bootstrap-4-react';

import colors from '../../styles/js/colors';
export default function EmbedMovie() {
	return (
		<>
			<div className='embed__div'>
				<Lead style={styles.title}>Movie App</Lead>
				<ResponsiveEmbed style={styles.embed}>
					<iframe
						title='demo_app_1'
						width='310px'
						type='iframe'
						height='700px'
						scrolling='no'
						style={styles.iframe}
						src='https://appetize.io/embed/1jnkqckwppcz8na7uzchc7df88?device=iphone6s&scale=75&orientation=portrait&osVersion=13.3'
					></iframe>
				</ResponsiveEmbed>
			</div>
			<div className='embed__div'>
				<Lead style={styles.title}>Restaurant </Lead>
				<ResponsiveEmbed style={styles.embed}>
					<iframe
						title='demo_app_2'
						width='310px'
						// 	width='310px'
						height='700px'
						type='iframe'
						style={styles.iframe}
						scrolling='no'
						src='https://appetize.io/embed/ag_h5qykj2yxb1vuaf0zhcw7wyqec?device=iphone6s&scale=75&orientation=portrait&osVersion=13.3'
					></iframe>
				</ResponsiveEmbed>
			</div>
		</>
	);
}
const styles = {
	// 	embed: {
	// 		alignSelf: 'center',
	// 		alignItems: 'center',
	// 		justifyContent: 'center',
	// 		margin: 0,
	// 		padding: 0,
	// 		height: 700,
	// 	},
	// 	iframe: {
	// 		display: 'flex',
	// 		alignItems: 'center',
	// 		justifyContent: 'center',
	// 		alignSelf: 'center',
	// 		margin: 0,
	// 		padding: 0,
	// 	},
	// };
	embed: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,
		padding: 0,
		height: 700,
	},
	iframe: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		margin: 0,
		padding: 0,
	},
	title: {
		width: 310,
		display: 'flex',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '2rem',
		fontFamily: 'sifonnbasic',
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 32,
		color: colors.smoke,
	},
};
