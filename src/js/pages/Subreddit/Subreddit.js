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
  
  insertPosts = (post, i) => {
    return <RedditPost key={i} post={post} theme={this.props.app.theme}/>;
  }

  render() {
    console.log(this.props);
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