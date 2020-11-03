import React from 'react';
import Main from './screens/Main.js';
import Resume from './screens/resume/resume';
import MovieAppDemo from './components/Projects/MovieAppDemo';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/movieAppDemo'>
					<MovieAppDemo />
				</Route>
				<Route path='/resume'>
					<Resume />
				</Route>
				<Route path='/'>
					<Main />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
