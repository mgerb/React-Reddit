import {applyMiddleware, createStore} from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import logger from "redux-logger";

import allReducers from '../reducers/index';

const defaultState = {
	posts : ['testpost123'],
	comments : ['testcomments']
};

const middleware = applyMiddleware(logger());

const store = createStore(allReducers, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;