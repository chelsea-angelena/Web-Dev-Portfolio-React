import React from 'react';
import './whatIdo.scss';
const text = {
	fillerText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	headerFill: 'Duis aute irure dolor',
};

export default function WhatIdo() {
	return (
		<div className='card__div'>
			<div className='card'>
				<h4 className='card__header'>{text.headerFill}</h4>
				<p className='cardBody'>{text.fillerText}</p>
			</div>
      <div className='card'>
				<h4 className='card__header'>{text.headerFill}</h4>
				<p className='cardBody'>{text.fillerText}</p>
			</div>
      <div className='card'>
				<h4 className='card__header'>{text.headerFill}</h4>
				<p className='cardBody'>{text.fillerText}</p>
			</div>
		</div>
	);
}
