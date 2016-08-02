import React from "react";
import {Link} from 'react-router';
import moment from 'moment';
import {getImageLink} from '../utils/regex';

import "./RedditPost.scss";

export default class RedditPost extends React.Component {

  componentWillMount(){

    const post = this.props.post.data;

    this.setState({
      title : post.title,
      comments : "http://www.reddit.com" + post.permalink,
      thumbnail : post.thumbnail,
      ups : post.ups,
      score : post.score,
      num_comments: post.num_comments,
      author : post.author,
      created : post.created,
      created_utc: post.created_utc,
      domain : post.domain,
      id : post.id,
      name : post.name,
      nsfw : post.over_18,
      permalink : post.permalink,
      subreddit : post.subreddit,
      subreddit_id : post.subreddit_id,
      url : post.url
    });

  }

  renderThumbnail() {
    if (this.state.thumbnail != "" && this.state.thumbnail != "self" && this.state.thumbnail != "nsfw"){
      return <img class="img-responsive pull-left" src={this.state.thumbnail} alt={this.state.thumbnail}/>
    }
  }

  getTimeCreated(){
    const offset = Date.now() - (this.state.created_utc * 1000);
    const hours = Math.floor(offset/1000/60/60);
    return moment.duration(hours, 'hours').humanize(); 
  }

  render() {
    return (
      <div class={"row RedditPost-row " + this.props.theme.module}>

        <div class="col-md-1">
          <div class="RedditPost-score-box">
              <span class="RedditPost-score">{this.state.ups}</span>
          </div>
        </div>

        <div class="col-sm-9">
          {this.renderThumbnail()}
          <span class="RedditPost-title"><a href={this.state.url}>{this.state.title}</a></span> <span class="RedditPost-domain"> ({this.state.domain})</span>
          <p>submitted {this.getTimeCreated()} ago by <a href={"https://reddit.com/user/" + this.state.author} target="_blank">u/{this.state.author}</a> to <Link to={"/r/" + this.state.subreddit}>r/{this.state.subreddit}</Link></p>
          <Link to={this.state.permalink}>{this.state.num_comments} comments</Link>
        </div>
      </div>
    );
  }
}