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

export const FadeAnimation = ({ children }) => {
	return (
		<div>
			<Fade up>{children}</Fade>
		</div>
	);
};
