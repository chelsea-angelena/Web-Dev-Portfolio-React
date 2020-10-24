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
import IconsRow from './IconsRow';
import { Link } from 'react-scroll';

const intro = {
	title: 'Chelsea Angelena Brown',
	subtitle: 'Full Stack Developer',
	caption: 'Web and Mobile Applications',
};

export default function IntroFile() {
	return (
		<Jumbotron
			id='intro'
			fluid
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				minHeight: 1000,
				flexDirection: 'column',
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: 'Montserrat',
			}}
		>
			<Navbar
				// className='navbar'
				collapseOnSelect
				expand='sm'
				variant='light'
				fixed='top'
				style={styles.nav}
			>
				<Navbar.Brand fixed='top'>
					<Link to='intro' spy={true} smooth='true'>
						<FontAwesomeIcon
							size='2x'
							color='black'
							icon={['fa', 'angle-up']}
						/>
					</Link>
				</Navbar.Brand>
			</Navbar>
			<Container fluid style={{ textAlign: 'center', maxWidth: 800 }}>
				<Display3 style={styles.title}>{intro.title}</Display3>

				<Display4 style={styles.subtitle}> {intro.subtitle}</Display4>
				<Lead>MOBILE APPLICATIONS • WEB DEVELOPMENT</Lead>
				<div className='tech__icons'>
					<p>
						<FontAwesomeIcon
							size='6x'
							className='brand-icon'
							icon={['fab', 'node']}
						/>
					</p>
					<p>
						<FontAwesomeIcon
							size='6x'
							className='brand-icon'
							icon={['fab', 'react']}
						/>
					</p>
					<p>
						<FontAwesomeIcon
							size='6x'
							className='brand-icon'
							icon={['fab', 'sass']}
						/>
					</p>
				</div>
				<SiteNav />
				<SocialIcons />
				<IconsRow />
			</Container>
		</Jumbotron>
	);
}
const styles = {
	title: { fontFamily: 'Oleo Script', fontWeight: '', fontSize: 64 },
	subtitle: {
		fontFamily: 'Montserrat',
		fontSize: 40,
	},
};
