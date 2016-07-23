import React from "react";
import {Link} from 'react-router';
import moment from 'moment';

import Loading from '../Loading/Loading';

import "./Comments.scss";

export default class RedditPost extends React.Component {
  
  insertComment = (comment, index) => {
    if (comment.kind == 't1'){
      
      const html = {__html : this.decodeHtml(comment.data.body_html.toString())};
      const author = comment.data.author, ups = comment.data.ups, time = this.getTimeCreated(comment.data.created_utc);
      let element = "";
      
      if(comment.data.replies != ''){
          element = <RedditPost comments={comment.data.replies.data.children} alt={!this.props.alt} theme={this.props.theme}/>;
      }
      
      const altComment = this.props.alt ? this.props.theme.altComment : "";

      return (<div class={`col-xs-12 Comments-comment ${this.props.theme.module} ${altComment}`} key={index}>
                <p>
                  <a href={"https://reddit.com/user/" + author} target="_blank">{author}</a>
                    <span class="Comments-score"> {ups} points </span>
                    <span class="Comments-timestamp">{time} ago</span>
                </p>
                <div dangerouslySetInnerHTML={html}/>{element}
              </div>);
    }
  }
  
  getTimeCreated(time){
    const offset = Date.now() - (time * 1000);
    const hours = Math.floor(offset/1000/60/60);
    return moment.duration(hours, 'hours').humanize(); 
  }
  
  decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
  }

  render() {
    return (
      <div class={"row Comments-row"}>
          {this.props.comments.map(this.insertComment)}
      </div>
    );
  }
}