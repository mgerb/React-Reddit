import * as types from '../actions/constants';


//----defaults---------------------------------
const defaultSubredditState = {
		subreddit : "",
		posts : [],
		fetching : false,
        fetched : false
    }

//----------------------------------------------

export default function(state=defaultSubredditState, action) {
    switch (action.type){
        case types.SET_SUBREDDIT:
            return Object.assign({}, state, {
                subreddit : action.subreddit
            });
        case types.INIT_POSTS:
            return Object.assign({}, state, {
                posts : action.posts,
                fetched : true,
                fetching : false
            });
        case types.FETCHING:
            return Object.assign({}, state, {
                fetched : false,
                fetching : action.fetching
            })
        
    }
    
	return state;
}