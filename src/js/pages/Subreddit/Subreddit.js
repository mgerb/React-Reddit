import React from "react";
import { Link } from "react-router";

import RedditPost from "../../components/RedditPost/RedditPost";

import "./Subreddit.scss";

export default class Subreddit extends React.Component {

  constructor() {
    super();

    this.state = {
      posts : []
    };
  }

  componentWillMount() {

    const subreddit = typeof this.props.params.subreddit != 'undefined' ? "/r/" + this.props.params.subreddit : "";

    $.getJSON("http://www.reddit.com" + subreddit + "/.json", function(data){
        this.setState({posts : data.data.children});
      }.bind(this));
  }

  getAllPosts(){
    var posts = [];

    for (var i in this.state.posts){
      posts.push(<RedditPost key={i} index={parseInt(i) + 1} post={this.state.posts[i]} />)
    }

    return posts;
  }

  render() {
    return (
      <div>
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 columns">
              {this.getAllPosts()}
            </div>
            <div class="col-md-2 columns">
              {this.getAllPosts()}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
