import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import subreddit from './subreddit';
import comments from './comments';

const allReducers = combineReducers({
	subreddit : subreddit,
	comments : comments,
	routing : routerReducer
});

export default allReducers;