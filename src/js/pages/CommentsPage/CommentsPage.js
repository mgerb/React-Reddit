import React from "react";
import { Link } from "react-router";

import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import Comments from '../../components/Comments/Comments';

import "./CommentsPage.scss";

export default class CommentsPage extends React.Component {
	
	componentDidMount(){
		console.log(this.props);
		
		const actions = this.props.actions.comments;
    const props = this.props.comments;
    const params = this.props.params;
    
    const path = '/r/' + params.subreddit + '/comments/' + params.id + '/' + params.title;
    
    console.log(params);
    
    actions.fetchComments(path);
    
    console.log(props);
    
	}
	
	componentWillReceiveProps(nextProps){
		
	}
	
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row Subreddit-row">
            <div class="col-md-10 Main-columns">
              <Loading/>
              <Comments/>
            </div>
            <div class="col-md-2 Main-columns">
              <Sidebar/>
            </div>
          </div>
        </div>
      </div>
    );
  }
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