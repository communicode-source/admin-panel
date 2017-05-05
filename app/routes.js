// import React from 'react';
// import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Dashboard from './components/pages/Dashboard';
import Users from './components/pages/Users';
import UserView from './components/pages/UserView';
import rest from './rest';

const { actions } = rest;

export default function routes({ dispatch }) {
    return {
        path: '/',
        component: App,
        indexRoute: {
            component: Dashboard
        },
        childRoutes: [
            {
                path: '/users',
                component: Users,
                onEnter(state, replaceState, callback) {
                    dispatch(actions.users({}, null, callback));
                }
            },
            {
                path: '/users/:id',
                component: UserView,
                onEnter(state, replaceState, callback) {
                    const { id } = state.params;
                    dispatch(actions.user({ id }, null, callback));
                }
            }
        ]
    };
}
