import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import codesandboxIcon from '@iconify-icons/simple-icons/codesandbox';
import { Link } from 'react-scroll';

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
			<Link
				to='contact'
				spy={true}
				smooth='true'
				className='contact__nav contact__nav--link'
			>
				<FontAwesomeIcon color={color} size='2x' icon={['far', 'envelope']} />
			</Link>
			<a
				rel='noopener noreferrer'
				href='https://codesandbox.io/u/chelsea-angelena'
				className='contact__nav'
			>
				<Icon icon={codesandboxIcon} height='32' color={color} />
			</a>

			<a
				rel='noopener noreferrer'
				href='https://www.freecodecamp.org/fcc1e976f81-14ac-40a4-9b7d-137b7ee95780'
				className='contact__nav'
			>
				<FontAwesomeIcon
					color={color}
					size='2x'
					icon={['fab', 'free-code-camp']}
				/>
			</a>
		</div>
	);
};
