import React from "react";
import "./RedditPost.scss";

export default class RedditPost extends React.Component {

  constructor(){
    super();

    this.state = {};
  }

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
      subreddit : post.subreddit,
      subreddit_id : post.subreddit_id,
      url : post.url
    });

  }

  renderThumbnail() {

    if (this.state.thumbnail != "" && this.state.thumbnail != "self" && this.state.thumbnail != "nsfw"){

      return  <div class="col-sm-1">
                <div>
                <img class="RedditPost-img" src={this.state.thumbnail} alt={this.state.thumbnail}/>
                </div>
              </div>;

    }
    else {

      return <div class="col-sm-1"></div>

    }

  }

  getTimeCreated(){
    const date = new Date();
    const created = new Date(this.state.created_utc * 1000);

    return date.getHours() - created.getHours() - 1;
  }

  render() {
    return (
      <div class="row RedditPost-row">

        <div class="col-sm-1">
          {this.props.index + " " + this.state.ups}
        </div>

        {this.renderThumbnail()}

        <div class="col-sm-8">
          <a href={this.state.url}>{this.state.title}</a> <span class="RedditPost-domain"> ({this.state.domain})</span>
          <p>submitted {this.getTimeCreated()} hours ago by {this.state.author} to r/{this.state.subreddit}</p>
          <a href={this.state.comments}>{this.state.num_comments} comments</a>
        </div>

        <div class="col-sm-2">
          <p></p>
        </div>
      </div>
    );
  }
}