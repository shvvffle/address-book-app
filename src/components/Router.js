import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Settings from './Settings';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/settings" component={Settings} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;