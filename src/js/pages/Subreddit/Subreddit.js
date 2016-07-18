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
  }
  
  //check to see if params in url changed (page changed)
  componentWillReceiveProps(nextProps){
    if(this.props.params.subreddit != nextProps.params.subreddit){
      this.loadPosts(nextProps.params);
    } 
  }
  
  loadPosts(params){
    const subreddit = typeof params.subreddit == 'undefined' ? '' : params.subreddit;
    const sort = typeof params.sort == 'undefined' ? '' : '/' + params.sort;
    const prefix = subreddit == '' ? '' : 'r/';
    const path = prefix + subreddit + sort + '.json';

    this.props.actions.subreddit.setSubreddit(subreddit);
    this.props.actions.subreddit.fetchPosts(path);
  }

  insertPosts = (post, i) => {
    return <RedditPost key={i} post={post} theme={this.props.app.theme}/>;
  }

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              <Sortbar theme={this.props.app.theme}/>
              {this.props.subreddit.fetched ? this.props.subreddit.posts.map(this.insertPosts) : <Loading theme={this.props.app.theme}/>}
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar toggleTheme={this.props.actions.app.toggleTheme} theme={this.props.app.theme}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}