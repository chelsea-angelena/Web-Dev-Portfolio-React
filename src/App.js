import React from 'react';
import { Resume, Code, Main } from './pages';
import { Demo } from './components/main';
import { Contact } from './components/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UnsplashApp from './components/projects/unsplash_src/UnsplashApp';

import SearchFIlter from './components/projects/SearchFIlter';

function App() {
	return <AppRoutes />;
}
const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/projects/unsplash' component={UnsplashApp} />
				<Route exact path='/projects/searchfilter' component={SearchFIlter} />

				<Route exact path='/resume' component={Resume} />
				<Route exact path='/code' component={Code} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/demo' component={Demo} />
				<Route exact path='/' component={Main} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
