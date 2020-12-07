import React from 'react';
import Main from './screens/Main.js';
import Resume from './screens/resume/resume';

import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Route exact path='/resume' component={Resume} />
			<Route exact path='/' component={Main} />
		</BrowserRouter>
	);
}

export default App;
