import React from "react";
import {Link} from 'react-router';

import Loading from '../Loading/Loading';

import "./Comments.scss";

export default class RedditPost extends React.Component {
  
  componentWillMount(){
    
  }
  
  render() {
    return (
      <div class="row Comments-row">
        <div class="Comments-alt">
          {this.props.comments.map(insertComment)}
        </div>
      </div>
    );
  }
}

const insertComment = (comment, index) => {
  
  if (comment.kind == 't1'){
    
    const html = {__html : decodeHtml(comment.data.body_html.toString())};
    const author = comment.data.author, ups = comment.data.ups, time = getTimeCreated(comment.data.created_utc);
    
    if(comment.data.replies != ''){
      return <div class="col-xs-12 Comments-comment" key={index}><p>{author + " " + ups + " points " + time}</p><div dangerouslySetInnerHTML={html}/><RedditPost comments={comment.data.replies.data.children}/></div>;
    } else {
      return <div class="col-xs-12 Comments-comment" key={index}><div dangerouslySetInnerHTML={html}/></div>;
    }
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

/*
function start(children, spaces, index ){
		if(children[index].kind == "t1"){
			var data = children[index].data;

			console.log(spaces + data.author);

			if(data.replies != ""){
				start(data.replies.data.children, spaces + " |", index);	
			}

		} else {
				console.log(children[i].kind );
		}
		
		if (typeof children[index + 1] != 'undefined'){
			start(children, spaces, index+1);
		}
	
}
*/