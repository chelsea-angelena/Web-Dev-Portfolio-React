import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';
import '../nav.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Display3, Display4, Lead } from 'bootstrap-4-react';
import SocialIcons from './SocialIcons';
import './intro.scss';
import '../../styles/fonts.scss';
import SiteNav from './InternalLink';
import { Link } from 'react-scroll';

const intro = {
	title: 'Chelsea Angelena Brown',
	subtitle: 'Full Stack Developer',
	caption: 'Web and Mobile Applications',
};

export default function IntroFile() {
	return (
		<Jumbotron id='intro' fluid>
			<div id='overlay'>
				<Navbar
					collapseOnSelect
					expand='sm'
					variant='light'
					fixed='top'
					style={styles.nav}
				>
					<Navbar.Brand fixed='top'>
						<Link to='intro' spy={true} smooth='true'>
							<FontAwesomeIcon
								size='1x'
								color='black'
								icon={['fa', 'angle-up']}
							/>
						</Link>
					</Navbar.Brand>
				</Navbar>

				<Container
					fluid
					style={{ textAlign: 'center', maxWidth: 800, marginTop: 88 }}
				>
					<Display3 style={styles.title}>{intro.title}</Display3>

					<Display4 style={styles.subtitle}> {intro.subtitle}</Display4>
					<Lead style={{ fontSize: 18 }}>
						MOBILE APPLICATIONS • WEB DEVELOPMENT
					</Lead>
					<div className='tech__icons'>
						<p>
							<FontAwesomeIcon
								size='6x'
								className='brand-icon'
								icon={['fab', 'node']}
								// color='white'
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='6x'
								className='brand-icon'
								icon={['fab', 'react']}
								// color='white'
							/>
						</p>
						<p>
							<FontAwesomeIcon
								size='6x'
								className='brand-icon'
								icon={['fab', 'sass']}
								// color='white'
							/>
						</p>
					</div>
					<SiteNav />
					<SocialIcons />
				</Container>
			</div>
		</Jumbotron>
	);
}
const styles = {
	title: {
		fontFamily: 'Montserrat',
		fontWeight: 'demi-bold',
		fontSize: 54,
		// color: 'white',
		paddingTop: 72,
		paddingBottom: 40,
	},
	subtitle: {
		fontFamily: 'Montserrat',
		fontSize: 32,
		// color: 'white',
	},
};
