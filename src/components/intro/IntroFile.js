import React from 'react';
import './intro.scss';
import '../../styles/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Display3, Display4, Lead } from 'bootstrap-4-react';
import './intro.scss';

import Header from './Header';
import IconsRow from './IconsRow';

const intro = {
	subtitle: "Chelsea's Portfolio",
	caption: 'Web and Mobile Applications',
};

export default function IntroFile() {
	return (
		<>
			<Jumbotron id='intro' fluid style={{ maxWidth: '100%' }}>
				<div id='overlay'>
					<Container
						fluid
						style={{
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Header />
						<div>
							<Display3 style={styles.title}>{intro.title}</Display3>
							<Display4 style={styles.subtitle}> {intro.subtitle}</Display4>
							<Lead
								style={{ fontSize: '1.25rem', color: 'white', padding: 42 }}
							>
								MOBILE APPLICATIONS • WEB DEVELOPMENT
							</Lead>
							<div className='intro__content' id='intro__content'>
								<div className='tech__icons' id='tech'>
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
							</div>
							{/* <SiteNav /> */}
							{/* <SocialIcons /> */}
							<IconsRow />
						</div>
					</Container>
				</div>
			</Jumbotron>
		</>
	);
}
const styles = {
	title: {
		fontFamily: 'Abril Fatface',
		fontWeight: 'bold',
		fontSize: 40,
		color: 'white',

		paddingBottom: 40,
	},
	subtitle: {
		fontFamily: 'Abril Fatface',
		fontSize: 54,
		color: 'white',
	},
};
