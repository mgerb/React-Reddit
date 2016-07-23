//react imports
import React from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

//component imports
import RedditPost from '../../components/RedditPost/RedditPost';
import Sidebar from '../../components/Sidebar/Sidebar';
import Loading from '../../components/Loading/Loading';
import Sortbar from '../../components/Sortbar/Sortbar';
import queryParams from '../../utils/queryParams';

import './Subreddit.scss';

export default class Subreddit extends React.Component {
  
  //load initial posts
  componentDidMount() {
    this.loadPosts(this.props.params);

    const bottom = document.getElementById('bottom');

    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollListener);
  }

  //check to see if params in url changed (page changed)
  componentWillReceiveProps(nextProps){
    if(this.props.params.subreddit != nextProps.params.subreddit){
      this.loadPosts(nextProps.params);
    } 
  }
  
  loadPosts(params){
    const url = new queryParams();
    let subreddit = params.subreddit;
    typeof subreddit !== 'undefined' ? url.pushParam('r') : subreddit = '';
    url.pushParam(params.subreddit);
    url.pushParam(params.sort);
    Object.keys(this.props.location.query).forEach((key,index) => {
      url.pushQueryParam(key, this.props.location.query[key]);
    });
    
    this.props.actions.subreddit.setSubreddit(subreddit);
    this.props.actions.subreddit.fetchPosts(url.toString());
  }

  loadMorePosts(params){
    if (this.props.subreddit.fetched){
      const url = new queryParams();
      let subreddit = params.subreddit;
      typeof subreddit !== 'undefined' ? url.pushParam('r') : subreddit = '';
      url.pushParam(params.subreddit);
      url.pushParam(params.sort);
      Object.keys(this.props.location.query).forEach((key,index) => {
        url.pushQueryParam(key, this.props.location.query[key]);
      });
      const name = this.props.subreddit.posts[this.props.subreddit.posts.length - 1].data.name;
      url.pushQueryParam('after', name);
  
      this.props.actions.subreddit.fetchMorePosts(url.toString());
    }
  }

  insertPosts = (post, i) => {
    return <RedditPost key={i} post={post} theme={this.props.app.theme}/>;
  }

  scrollListener = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.props.subreddit.fetchingMore) {
      this.loadMorePosts(this.props.params);
    }
  }

  render() {
    const errorFetching = this.props.subreddit.errorFetching;
    const posts = this.props.subreddit.posts;
    const fetched = this.props.subreddit.fetched;
    const fetching = this.props.subreddit.fetching;
    const fetchingMore = this.props.subreddit.fetchingMore;
    const theme = this.props.app.theme;
    const toggleTheme = this.props.actions.app.toggleTheme;
    
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              <Sortbar theme={theme}/>
              {errorFetching ? <div>Error fetching posts</div> : ""}
              {fetched ? posts.map(this.insertPosts) : <Loading theme={theme}/>}
              {fetchingMore && !fetching ? <Loading theme={theme}/>: null}
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar toggleTheme={toggleTheme} theme={theme}/>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
    );
  }
}