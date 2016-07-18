import React from "react";
import {Link} from 'react-router';

import Loading from '../Loading/Loading';

import "./Comments.scss";

export default class RedditPost extends React.Component {
  
  insertComment = (comment, index) => {
    if (comment.kind == 't1'){
      
      const html = {__html : decodeHtml(comment.data.body_html.toString())};
      const author = comment.data.author, ups = comment.data.ups, time = getTimeCreated(comment.data.created_utc);
      let element = "";
      
      if(comment.data.replies != ''){
          element = <RedditPost comments={comment.data.replies.data.children} theme={this.props.theme}/>;
      }
      
      return <div class={"col-xs-12 Comments-comment " + this.props.theme.module} key={index}><p>{author + " " + ups + " points " + time}</p><div dangerouslySetInnerHTML={html}/>{element}</div>;
    }
  }
  
  render() {
    return (
      <div class={"row Comments-row " + this.props.theme.module}>
          {this.props.comments.map(this.insertComment)}
      </div>
    );
  }
}

function getTimeCreated(time){
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const created = new Date((time * 1000) - offset);

    return date.getHours() - created.getHours();
  }
  
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}