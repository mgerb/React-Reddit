import {applyMiddleware, createStore} from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';

import logger from "redux-logger";

import allReducers from '../reducers/allReducers';

const debug = process.env.NODE_ENV !== "production";

const defaultState = {};

const middleware = debug ? applyMiddleware(thunkMiddleware, logger()) : applyMiddleware(thunkMiddleware);

const store = createStore(allReducers, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;