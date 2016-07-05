import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import postReducer from './postReducer';
import commentsReducer from './commentsReducer';

const allReducers = combineReducers({
	posts : postReducer,
	comments : commentsReducer,
	routing : routerReducer
});

export default allReducers;