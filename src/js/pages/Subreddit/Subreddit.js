//react imports
import React from "react";
import { Link } from "react-router";
import 'whatwg-fetch';

//component imports
import RedditPost from "../../components/RedditPost/RedditPost";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loading from "../../components/Loading/Loading";
import Sortbar from "../../components/Sortbar/Sortbar";

import "./Subreddit.scss";

export default class Subreddit extends React.Component {
  
  //load initial posts
  componentDidMount() {
    this.loadPosts(this.props.params);

    const bottom = document.getElementById('bottom');
    
  }
  
  //check to see if params in url changed (page changed)
  componentWillReceiveProps(nextProps){
    if(this.props.params.subreddit != nextProps.params.subreddit){
      this.loadPosts(nextProps.params);
    } 
  }
  
  //TODO add functionality for query paramters to sort posts
  loadPosts(params){
    const subreddit = typeof params.subreddit == 'undefined' ? '' : params.subreddit;
    const sort = typeof params.sort == 'undefined' ? '' : '/' + params.sort;
    const prefix = subreddit == '' ? '' : 'r/';
    const path = prefix + subreddit + sort;

    this.props.actions.subreddit.setSubreddit(subreddit);
    this.props.actions.subreddit.fetchPosts(path);
  }

  loadMorePosts(){
    const params = this.props.params;
    const subreddit = typeof params.subreddit == 'undefined' ? '' : params.subreddit;
    const sort = typeof params.sort == 'undefined' ? '' : '/' + params.sort;
    const prefix = subreddit == '' ? '' : 'r/';
    const path = prefix + subreddit + sort;

    const name = this.props.subreddit.posts[this.props.subreddit.posts.length - 1].data.name;
    let query = 'after=' + name;

    this.props.actions.subreddit.fetchMorePosts(path, query);
  }

  //check if scrolled to bottom of page to load more posts
  isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
  }

  insertPosts = (post, i) => {
    return <RedditPost key={i} post={post} theme={this.props.app.theme}/>;
  }

  render() {

    setInterval(() => {
      if(this.isScrolledIntoView(bottom) && this.props.subreddit.fetched && !this.props.subreddit.fetchingMore){
        this.loadMorePosts();
      }
    }, 200);

    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              <Sortbar theme={this.props.app.theme}/>
              {this.props.subreddit.fetched ? this.props.subreddit.posts.map(this.insertPosts) : <Loading theme={this.props.app.theme}/>}
              {this.props.subreddit.fetchingMore ? <Loading theme={this.props.app.theme}/>: null}
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar toggleTheme={this.props.actions.app.toggleTheme} theme={this.props.app.theme}/>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
    );
  }
}