import * as types from '../actions/constants';


//defaults
const defaultCommentsState = {
    post: {},
    comments: [],
    fetching: false,
    fetched: false
}

export default function(state = defaultCommentsState, action) {
    switch (action.type) {
        case types.INIT_COMMENTS:
            return Object.assign({}, state, {
                post: action.post,
                comments: action.comments,
                fetching: false,
                fetched: true
            });
        case types.FETCHING:
            return Object.assign({}, state, {
                fetched: false,
                fetching: action.fetching
            })
    }
    return state;
}
