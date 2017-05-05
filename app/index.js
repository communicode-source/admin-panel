import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';

import 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import thunk from 'redux-thunk';
import rest from './rest';


rest.use('fetch', adapterFetch(fetch));
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(rest.reducers);
const store = createStoreWithMiddleware(reducer);
const configStore = configureStore();
const history = syncHistoryWithStore(browserHistory, configStore);

render(
    <AppContainer>
        <Root store={store} configStore={configStore} history={history}/>
    </AppContainer>,
    document.getElementById('root'),
);

if(module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} configStore={configStore} history={history}/>
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
