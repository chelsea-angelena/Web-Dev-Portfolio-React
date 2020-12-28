// You can live edit this code below the import statements
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const down = false;
const left = true;

export default function Animated({ children }) {
	const [show, setShow] = useState(false);

	useEffect((show) => {
		setShow(!show);
	}, []);

	return (
		<Fade
			down={down}
			left={left}
			when={show}
			animationIn='fadeInLeft'
			animationInDuration={8000}
			// transition={{ duration: 20 }}
			// animationOut='fadeOut'
			isVisible={true}
		>
			{children}
		</Fade>
	);
}

// const Animate = ({ children }) => (
// 	<motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
// 		{children}
// 	</motion.div>
// );

// // animationIn='fadeInLeft'
// // animationInDuration={3000}
// // animationOut='fadeOut'
// // isVisible={true}
// export default Animate;
