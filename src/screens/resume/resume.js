import React from 'react';
import PDF from '../../assets/CBrown-Resume.pdf';
import './resume.scss';

const Resume = () => {
	return (
		<div style={styles.div} className='resume--div'>
			<embed
				className='resume'
				style={styles.resume}
				src={PDF}
				type='application/pdf'
				height={800}
				width={640}
			/>
		</div>
	);
};
export default Resume;

const styles = {
	div: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden',
		alignItems: 'center',
	},
	resume: {
		width: '100%',
		height: 1200,
		paddingTop: 0,
		marginTop: 0,

		// paddingLeft: 56,
		// paddingRight: 56,
		backgroundColor: '#616161',
		overflow: 'hidden',
		scrollbar: 'none',
		alignSelf: 'center',
	},
};
