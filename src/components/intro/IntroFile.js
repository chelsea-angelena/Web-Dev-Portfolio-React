import React, { useState } from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/fonts.scss';
import '../nav.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Birds from './Birds';
import { Display3, Display4, Lead } from 'bootstrap-4-react';
import SocialIcons from './SocialIcons';
import './intro.scss';
import '../../styles/fonts.scss';
import InternalLink from './InternalLink';

const intro = {
	title: 'Chelsea Angelena Brown',
	subtitle: 'Full Stack Developer',
	caption: 'Web and Mobile Applications',
};

export default function IntroFile() {
	const [clicked, setClicked] = useState(false);

	const onScreenPress = () => {
		setClicked(!clicked);
	};

	return (
		<Jumbotron
			fluid
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				minHeight: 700,
				flexDirection: 'column',
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: 'Montserrat',
			}}
		>
			<Container fluid style={{ textAlign: 'center', maxWidth: 800 }}>
				<Display3 style={styles.title}>{intro.title}</Display3>
				{clicked ? <Birds /> : null}

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
				<InternalLink />
				<SocialIcons />
				<Button
					onClick={onScreenPress}
					variant='outline-dark'
					style={{ marginTop: 32 }}
				>
					(click me)
				</Button>
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
