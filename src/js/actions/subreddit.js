import * as types from './constants';
import 'whatwg-fetch';

function initPosts(posts) {
    return {
        type: types.INIT_POSTS,
        posts
    }
}

function loadMorePosts(posts) {
    return {
        type: types.LOAD_MORE_POSTS,
        posts
    }
}

export function setSubreddit(subreddit) {
    return {
        type: types.SET_SUBREDDIT,
        subreddit
    }
}

export function setFetching(fetching) {
    return {
        type: types.FETCHING,
        fetching
    }
}

export function setFetchingMore(fetchingMore) {
    return {
        type: types.FETCHING_MORE,
        fetchingMore
    }
}

export function fetchPosts(path, params) {
    return (dispatch) => {
        dispatch(setFetching(true));
        return fetch(`https://www.reddit.com/${path}.json?${params}`)
            .then(response => response.json())
            .then(json => {
                dispatch(initPosts(json.data.children));
            });
    }
}

export function fetchMorePosts(path, params) {
    return (dispatch) => {
        dispatch(setFetchingMore(true));
        return fetch(`https://www.reddit.com/${path}.json?${params}`)
            .then(response => response.json())
            .then(json => {
                dispatch(loadMorePosts(json.data.children));
            });
    }
}
