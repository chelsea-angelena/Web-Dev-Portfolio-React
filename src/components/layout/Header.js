import React from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import { Link } from 'react-scroll';
import ResumeNav from './ResumeNav';
import HomeIcon from './HomeIcon';

const colors = {
	// dark: '#37474F',
	dark: 'rgb(7, 17, 15)',
	// dark: 'hsl(60, 1%, 14%)',
	purp: 'hsl(225, 59%, 11%)',
	green: 'hsl(186, 21%, 26%)',
	// dark: '#20272F',
};

export default function NavigationBar() {
	return (
		<Navbar
			expand='sm'
			dark
			fluid='true'
			sticky
			fixed='top'
			style={{
				backgroundColor: colors.dark,
				color: 'white',
				padding: 0,
				height: 100,
				margin: 0,
				zIndex: 15,
				textAlign: 'left',
			}}
		>
			<Navbar.Toggler
				target='#navbarSupportedContent'
				style={{ marginLeft: 24, marginTop: 24, marginBottom: 20 }}
			/>

			<Collapse navbar id='navbarSupportedContent'>
				<Navbar.Nav mr='auto' style={{ backgroundColor: colors.dark }}>
					<Nav.Item className='navItem'>
						{/* <Link to='intro' spy={true} smooth='true' className='draw link'> */}
						<HomeIcon />
						{/* </Link> */}
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='about' spy={true} smooth='true' className='draw link'>
							About
						</Link>
					</Nav.Item>

					{/* <Nav.Item className='navItem'>
						<Link to='demo' spy={true} smooth='true' className='draw link'>
							Demo
						</Link>
					</Nav.Item> */}
					<Nav.Item className='navItem'>
						<Link to='projects' spy={true} smooth='true' className='draw link'>
							Projects
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='demo' spy={true} smooth='true' className='draw link'>
							Demo
						</Link>
					</Nav.Item>
					<Nav.Item className='navItem'>
						<Link to='contact' spy={true} smooth='true' className='draw link'>
							Contact
						</Link>
					</Nav.Item>

					<ResumeNav />
				</Navbar.Nav>
			</Collapse>
		</Navbar>
	);
}
