import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'bootstrap-4-react';

export default function IconsRow() {
	return (
		<Container
			fluid
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignSelf: 'center',
				justifyContent: 'space-evenly',
				width: '100%',
			}}
		>
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
					icon={['fab', 'app-store-ios']}
				/>
			</p>
		</Container>
	);
}
