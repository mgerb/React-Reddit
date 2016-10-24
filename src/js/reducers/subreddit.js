import * as types from '../actions/constants';

//defaults
const defaultSubredditState = {
    subreddit: "",
    posts: [],
    errorFetching: false,
    fetching: false,
    fetched: false,
    fetchingMore: false,
    fetchedMore: false
}

export default function(state = defaultSubredditState, action) {
    switch (action.type) {
        case types.SET_SUBREDDIT:
            return Object.assign({}, state, {
                subreddit: action.subreddit
            });
        case types.INIT_POSTS:
            return Object.assign({}, state, {
                posts: action.posts,
                fetched: true,
                fetching: false
            });
        case types.FETCHING:
            return Object.assign({}, state, {
                errorFetching: false,
                fetched: false,
                fetching: action.fetching
            });
        case types.FETCHING_MORE:
            return Object.assign({}, state, {
                fetchedMore: false,
                fetchingMore: action.fetchingMore
            });
        case types.LOAD_MORE_POSTS:
            return Object.assign({}, state, {
                posts: [...state.posts, ...action.posts],
                fetchedMore: true,
                fetchingMore: false
            });
        case types.ERROR_FETCHING:
            return Object.assign({}, state, {
                errorFetching: action.bool,
                fetching: false,
                fetchingMore: false,
                fetched: true,
                fetchedMore: true
            });
    }
    return state;
}
