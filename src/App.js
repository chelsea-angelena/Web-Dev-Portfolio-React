import React from 'react';
import Main from './screens/Main.js';
import Resume from './screens/resume/resume';
import './styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (

			<BrowserRouter>
				<Switch>
					<Route path='/'>
						<Main />
					</Route>
					<Route path='/resume'>
						<Resume />
					</Route>
				</Switch>
			</BrowserRouter>

	);
}

export default App;
