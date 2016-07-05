import {STORE_POST} from '../actions/constants';


//----defaults---------------------------------
const defaultSubredditState = {
		title : "",
		posts : [],
		fetching : false,
        fetched : false
    }

const defaultPostsState = [{
			data : {},
			comments : []
		}];
//----------------------------------------------


function posts(state=defaultPostsState, action){
    switch(action.state){
        case STORE_POST:
            let temp = state.slice();
            temp[action.index].data = action.data;
            return temp;
    }
    
    return state;
}

export default function(state=defaultSubredditState, action) {
    switch (action.type){
        case STORE_POST:
            let temp = Object.assign({}, state, {
                    posts : posts(state.posts, action)
            });
            
            return temp; 
    }
    
	return state;
}