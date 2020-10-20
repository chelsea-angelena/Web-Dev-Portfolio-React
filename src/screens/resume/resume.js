import React from 'react';
import PDF from '../../assets/CBrown-Resume.pdf';
import './resume.scss';

const Resume = () => {
	return (
		<div style={styles.container}>
			<div style={styles.div} className='resume--div'>
				{/* <embed
				className='resume'
				style={styles.resume}
				src={PDF}
				type='application/pdf'
				height={800}
				width={640}
			/> */}
			</div>
		</div>
	);
};
export default Resume;

const styles = {
	div: {
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 72,
		width: 800,
		height: 1200,
		backgroundColor: 'grey',
	},
	container: {
		display: 'flex',
		maxWidth: '100%',
		justifyContent: 'center',
		alignSelf: 'center',
		overflow: 'hidden',
		alignItems: 'center',
		width: '100%',
		height: 1200,
		backgroundColor: 'grey',
	},
	resume: {
		width: 600,
		height: 1200,
		paddingTop: 0,
		marginTop: 0,
		overflow: 'hidden',
		scrollbar: 'none',
		alignSelf: 'center',
	},
};
