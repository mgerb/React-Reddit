import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import subreddit from './subreddit';
import comments from './comments';
import app from './app';

const allReducers = combineReducers({
    app: app,
    comments: comments,
    routing: routerReducer,
    subreddit: subreddit
});

export default allReducers;
