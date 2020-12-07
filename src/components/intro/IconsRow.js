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
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'html5']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fab', 'css3']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'database']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>

			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'code-branch']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>
			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					icon={['fas', 'server']}
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
				/>
			</p>

			<p>
				<FontAwesomeIcon
					size='2x'
					className='brand-icon-small'
					style={{ color: 'hsl(240.2, 100%, 98.4%)' }}
					icon={['fab', 'app-store-ios']}
				/>
			</p>
		</Container>
	);
}
