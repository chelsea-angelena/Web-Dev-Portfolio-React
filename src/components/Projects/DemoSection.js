import React from 'react';
import EmbedMovie from './EmbedMovie';
import { Lead, Container, Card } from 'bootstrap-4-react';
import './demo.scss';
export default function DemoSection() {
	return (
		<Container
			fluid
			id='demo'
			style={{
				marginTop: 0,
				paddingTop: 64,
				marginBottom: 0,
				paddingBottom: 64,
				backgroundColor: 'rgb(91.8%, 93%, 94.1%)',
			}}
		>
			<Card>
				{/* <Card style={{ borderStyle: 'solid', borderColor: 'black' }}> */}
				<Lead style={styles.headerText}>Demo App</Lead>
				<Lead style={styles.lead}>
					This is a simulator build of mobile project, which was built using
					React-Native. Run the app right here in the browser. This app has been
					built for both iOS and Android. Check out the links in the project
					section for more info.
				</Lead>
				<EmbedMovie />
			</Card>
		</Container>
	);
}
const styles = {
	lead: {
		fontFamily: 'Montserrat',
		fontSize: '1rem',
		padding: 24,
		lineHeight: '2.5rem',
		maxWidth: 500,
	},
	headerText: {
		fontSize: 42,
		// display: 'flex',
		padding: 24,
		fontFamily: 'Abril Fatface',
	},
};
