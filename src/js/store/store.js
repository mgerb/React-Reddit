import {applyMiddleware, createStore} from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';

import logger from "redux-logger";

import allReducers from '../reducers/allReducers';

const defaultState = {};

const middleware = applyMiddleware(thunkMiddleware, logger());

const store = createStore(allReducers, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;