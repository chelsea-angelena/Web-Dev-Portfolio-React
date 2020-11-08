import React from 'react';
import Main from './screens/Main.js';
import Resume from './screens/resume/resume';
import MovieAppDemo from './components/Projects/MovieAppDemo';
import YelpDemo from './components/Projects/YelpDemo';
import MarketDemo from './components/Projects/MarketDemo';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/YelpDemo'>
					<YelpDemo />
				</Route>
				<Route exact path='/MarketDemo'>
					<MarketDemo />
				</Route>
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
