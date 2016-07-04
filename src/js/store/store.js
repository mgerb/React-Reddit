import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";

const userReducer = (state={}, action) => {
	switch(action.type){
		case "TEST" : {
			state = {...state, name : action.payload}
			break;
		}
	}

	return state;
};

const subredditReducer = (state={}, action) => {
	switch(action.type){

	}
};

const reducers = combineReducers({
	user : userReducer,
	subreddit : subredditReducer
})

const middleware = applyMiddleware(logger());

const store = createStore(reducers, middleware);

