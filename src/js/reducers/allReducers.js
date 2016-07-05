import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import subredditReducer from './subredditReducer';

const allReducers = combineReducers({
	subreddit : subredditReducer,
	routing : routerReducer
});

export default allReducers;