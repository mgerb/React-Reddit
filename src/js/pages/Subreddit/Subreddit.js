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


  insertAllPosts(){
      
      let posts = [];
      
      for (let i in this.props.subreddit.posts){
        posts.push(<RedditPost key={i} index={parseInt(i) + 1} post={this.props.subreddit.posts[i]} />);
      }
      
      return posts;
  }

  render() {
    
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              {this.props.subreddit.fetched ? this.insertAllPosts() : <Loading/>}
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