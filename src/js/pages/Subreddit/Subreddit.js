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
    this.loadPosts(this.props.params, this.props.location.query);

    const bottom = document.getElementById('bottom');

    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollListener);
  }

  //check to see if params in url changed (page changed)
  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname != nextProps.location.pathname || this.props.location.query != nextProps.location.query){
      this.loadPosts(nextProps.params, nextProps.location.query);
    }
  }
  
  loadPosts(params, query){
    const url = new queryParams();
    let subreddit = params.subreddit;
    typeof subreddit !== 'undefined' ? url.pushParam('r') : subreddit = '';
    url.pushParam(params.subreddit);
    url.pushParam(params.sort);
    Object.keys(query).forEach((key,index) => {
      url.pushQueryParam(key, query[key]);
    });
    
    this.props.actions.subreddit.setSubreddit(subreddit);
    this.props.actions.subreddit.fetchPosts(url.toString());
  }

  loadMorePosts(params, query){
    if (this.props.subreddit.fetched){
      const url = new queryParams();
      let subreddit = params.subreddit;
      typeof subreddit !== 'undefined' ? url.pushParam('r') : subreddit = '';
      url.pushParam(params.subreddit);
      url.pushParam(params.sort);
      Object.keys(query).forEach((key,index) => {
        url.pushQueryParam(key, query[key]);
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
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.props.subreddit.fetchingMore && this.props.app.autoLoad) {
      this.loadMorePosts(this.props.params, this.props.location.query);
    }
  }
  
  loadMoreButton = () => {
    return (
        <div class="row text-center">
            <a class={this.props.app.theme.font} onClick={() => {this.loadMorePosts(this.props.params, this.props.location.query)}}>
              <i class="fa fa-chevron-down fa-2 Subreddit-loadMoreButton" aria-hidden="true"></i>
            </a>
        </div>
      )
  }
  
  render() {
    const errorFetching = this.props.subreddit.errorFetching;
    const posts = this.props.subreddit.posts;
    const fetched = this.props.subreddit.fetched;
    const fetching = this.props.subreddit.fetching;
    const fetchingMore = this.props.subreddit.fetchingMore;
    const theme = this.props.app.theme;
    
    //copy props and actions for side bar
    const sideBarProps = Object.assign({}, this.props.app);
    const sideBarActions = Object.assign({}, this.props.actions.app);
    
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              <Sortbar theme={theme} subreddit={this.props.subreddit.subreddit}/>
              {errorFetching ? <div>Error fetching posts</div> : ""}
              {fetched ? posts.map(this.insertPosts) : <Loading theme={theme}/>}
              {fetchingMore && !fetching ? <Loading theme={theme}/>: ""}
              {!this.props.app.autoLoad && fetched ? this.loadMoreButton(): ""}
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar actions={sideBarActions} app={sideBarProps}/>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
    );
  }
}