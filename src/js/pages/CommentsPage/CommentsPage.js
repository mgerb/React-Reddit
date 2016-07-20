import React from "react";
import { Link } from "react-router";

import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import Comments from '../../components/Comments/Comments';
import RedditPost from '../../components/RedditPost/RedditPost';

import "./CommentsPage.scss";

export default class CommentsPage extends React.Component {
	
	componentDidMount(){
		const actions = this.props.actions.comments;
    const params = this.props.params;
    
    const path = '/r/' + params.subreddit + '/comments/' + params.id + '/' + params.title;
    
    this.props.actions.subreddit.setSubreddit(this.props.params.subreddit);
    actions.fetchComments(path);
	}
	
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row ">
            <div class="col-md-10 Main-columns">
              {this.props.comments.fetched ? <RedditPost post={this.props.comments.post} theme={this.props.app.theme}/> : null}
              {this.props.comments.fetched ? <Comments comments={this.props.comments.comments} alt={false} theme={this.props.app.theme}/> : <Loading theme={this.props.app.theme}/>}
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