import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/pages/Dashboard';
import Users from './components/pages/Users';
import UserView from './components/pages/UserView';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={UserView} />
    </Route>
);
