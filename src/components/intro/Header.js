import React from 'react';
import { Navbar, Nav, Container, Collapse } from 'bootstrap-4-react';
import { Link } from 'react-scroll';
import '../nav.scss';

export default function Header() {
	return (
		<Container fluid style={{ maxWidth: '100%' }}>
			<Navbar
				expand='sm'
				dark
				fluid='true'
				sticky
				fixed='top'
				style={{
					backgroundColor: 'rgba(0,0,0,.8)',
					color: 'white',
					padding: 0,
					height: 75,
					margin: 0,
					zIndex: 15,
				}}
			>
				<Navbar.Toggler
					target='#navbarSupportedContent'
					style={{ marginLeft: 24 }}
				/>
				<Collapse
					navbar
					id='navbarSupportedContent'
					style={{
						backgroundColor: 'rgba(0,0,0,.8)',
						maxWidth: '100%',
						paddingTop: 16,
						paddingBottom: 16,
						// height: 75,
					}}
				>
					<Navbar.Nav
						mr='auto'
						style={{
							color: 'white',
							justifyContent: 'center',
							// height: 75,
							alignItems: 'center',
							// width: '100%',
						}}
					>
						<Nav.Item className='navItem'>
							<Link
								to='intro'
								spy={true}
								smooth='true'
								className='draw link'
								style={styles.navItem}
							>
								Home
							</Link>
						</Nav.Item>
						<Nav.Item className='navItem'>
							<Link
								to='about'
								spy={true}
								smooth='true'
								className='draw link'
								style={styles.navItem}
							>
								About
							</Link>
						</Nav.Item>

						<Nav.Item className='navItem'>
							<Link to='demo' spy={true} smooth='true' className='draw link'>
								Demo
							</Link>
						</Nav.Item>
						<Nav.Item className='navItem'>
							<Link
								to='projects'
								spy={true}
								smooth='true'
								className='draw link'
							>
								Projects
							</Link>
						</Nav.Item>
						<Nav.Item className='navItem'>
							<Link to='contact' spy={true} smooth='true' className='draw link'>
								Contact
							</Link>
						</Nav.Item>

						<Nav.Item className='navItem'>
							<Nav.Link
								to='/resume'
								href='/resume'
								className='draw link'
								style={{ color: 'white' }}
							>
								Resume
							</Nav.Link>
						</Nav.Item>
					</Navbar.Nav>
				</Collapse>
			</Navbar>
		</Container>
	);
}
const styles = {
	navItem: {
		color: 'white',
		fontFamily: 'Montserrat',
		fontWeight: 'Regular',
	},
};
