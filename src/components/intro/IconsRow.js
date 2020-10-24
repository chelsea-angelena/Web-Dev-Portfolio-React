import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';

export default function IconsRow() {
	return (
		<div style={styles.row}>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'js-square']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'html5']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'css3']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'database']}
				/>
			</p>

			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'code-branch']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'server']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'android']}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'app-store-ios']}
				/>
			</p>
		</div>
	);
}
const styles = {
	row: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: '100%',
		justifyContent: 'space-between',
		position: 'relative',
		bottom: -40,
	},
};
