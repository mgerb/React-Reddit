//react imports
import React from "react";
import { Link } from "react-router";
import 'whatwg-fetch';

//component imports
import RedditPost from "../../components/RedditPost/RedditPost";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Subreddit.scss";

export default class Subreddit extends React.Component {

  constructor() {
    super();

    this.state = {
      posts : []
    };
  }

  componentDidMount() {
    
    console.log(this.props.subreddit);
    
    const subreddit = typeof this.props.params.subreddit != 'undefined' ? "/r/" + this.props.params.subreddit : "";
    
    fetch(`https://www.reddit.com/${subreddit}/.json`)
      .then(response => response.json())
      .then(json => {
        let posts = json.data.children;
        
        for (let i in posts){
          this.props.storePost(i, posts[i].data);
        }
        
        console.log(json);
      });
    
    /*
    $.getJSON("https://www.reddit.com" + subreddit + "/.json", function(data){
        console.log(data.data.children);
        this.setState({posts : data.data.children});
      }.bind(this));
    */
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
          <div class="row Subreddit-row">
            <div class="col-md-10 Subreddit-columns">
              {this.getAllPosts()}
            </div>
            <div class="col-md-2 Subreddit-columns">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

    );
  }
}