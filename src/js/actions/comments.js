import * as types from './constants';
import 'whatwg-fetch';

export function initCommentsPage(comments, post){
	return {
		type : types.INIT_COMMENTS,
		comments,
		post
	}
}

export function setFetching(fetching){
	return {
		type : types.FETCHING,
		fetching
	}
}

export function fetchComments(path){
	return (dispatch) => {
		dispatch(setFetching(true));
		return fetch(`https://www.reddit.com/${path}/.json`)
    			.then(response => response.json())
    			.then(json => {
    				let comments = json[1].data.children;
    				let post = json[0].data.children[0];
    				
        			dispatch(initCommentsPage(comments, post));
    			});
	}
}