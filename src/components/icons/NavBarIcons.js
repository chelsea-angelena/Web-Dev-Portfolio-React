import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Icon, InlineIcon } from '@iconify/react';
import codesandboxIcon from '@iconify-icons/simple-icons/codesandbox';

export const NavBarIcons = ({ color }) => {
	return (
		<div className='navBarIcons'>
			<a
				rel='noopener noreferrer'
				href='https://www.linkedin.com/in/chelsea-a-brown'
				className='contact__nav'
			>
				<FontAwesomeIcon
					color={color}
					size='2x'
					icon={['fab', 'linkedin-in']}
				/>
			</a>
			<a
				rel='noopener noreferrer'
				href='https://github.com/chelsea-angelena'
				className='contact__nav'
			>
				<FontAwesomeIcon color={color} size='2x' icon={['fab', 'github']} />
			</a>
			<a
				rel='noopener noreferrer'
				href='https://www.chelseaangelena.com/contact'
				className='contact__nav'
			>
				<FontAwesomeIcon color={color} size='2x' icon={['far', 'envelope']} />
			</a>
			<a
				rel='noopener noreferrer'
				href='https://codesandbox.io/u/chelsea-angelena'
				className='contact__nav'
			>
				<Icon icon={codesandboxIcon} height='32' color={color} />
			</a>
		</div>
	);
};
