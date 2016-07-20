# sreddit
This is a Reddit client that I am developing to learn both React and Redux as well as ES6.

[Current development site located here](https://sreddit-mgerb42.c9users.io/) (may or may not be running)

## Goal
The goal of this project is to make a Reddit client that automatically updates posts and shows live animations.


## ToDo

- subreddit page
	- ~~add paging~~
	- ~~allow users to change color scheme~~
		- store in browser
	- fix state on redditpost.js
	- Add options to side bar
	- select amount of posts to load per page
	- quick view of posts and photos
	- live updating posts/comments
	- top bar to filter posts

- comments page
	-alternate background color between comments
	- load more comments
	- smooth scroll between leading comments
	- add word cloud to comments page
	- smooth scroll between comments

- add user information page

- other
	- ~~fix time stamps~~
	- get new font
	- localstorage - maybe look into localforage
	- styling for posts/comments
    - get rid of jquery (use bootstrap without jquery)
	- move all css imports within js
	- configure webpack for html generation
	- refactor theme css
    
- server side
	- set up backend with Go
	- run on app engine

- ...more to come

## Future
Future work includes incorporating the Reddit API, which will allow users to login and iteract with the site. For now, this is out of the scope of the project.