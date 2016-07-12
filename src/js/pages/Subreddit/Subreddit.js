//react imports
import React from "react";
import { Link } from "react-router";
import 'whatwg-fetch';

//component imports
import RedditPost from "../../components/RedditPost/RedditPost";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loading from "../../components/Loading/Loading";

import "./Subreddit.scss";

export default class Subreddit extends React.Component {
  
  componentDidMount() {
    const actions = this.props.actions.subreddit;
    const props = this.props.subreddit;
    const params = this.props.params;
    
    const subreddit = typeof params.subreddit == 'undefined' ? '' : params.subreddit;
    
    actions.setSubreddit(subreddit);
    
    let prefix = subreddit == '' ? '' : '/r/';
    let path = prefix + subreddit;
    
    actions.fetchPosts(path);
  }
  
  
  //check to see if params in url changed (page changed)
  componentWillReceiveProps(nextProps){
    const actions = this.props.actions.subreddit;
    const nextParams = nextProps.params;
    const params = this.props.params;
    
    if(params.subreddit != nextParams.subreddit){
      
      const subreddit = typeof nextParams.subreddit == 'undefined' ? '' : nextParams.subreddit;
      
      actions.setSubreddit(subreddit);
      
      let prefix = subreddit == '' ? '' : '/r/';
      let path = prefix + subreddit;
      
      actions.fetchPosts(path);
    }
    
  }
  
  render() {
    
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
            <div class="row Subreddit-sortbar">
              <div class="col-xs-12">
                <a class="Subreddit-links" href="/">hot</a>
                <a class="Subreddit-links" href="/">new</a>
                <a class="Subreddit-links" href="/">rising</a>
                <a class="Subreddit-links" href="/">controversial</a>
                <a class="Subreddit-links" href="/">top</a>
                <a class="Subreddit-links" href="/">gilded</a>
              </div>
            </div>
              {this.props.subreddit.fetched ? this.props.subreddit.posts.map(insertPosts) : <Loading/>}
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const insertPosts = (post, i) => {
  return <RedditPost key={i} post={post} />;
}