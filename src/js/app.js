//redux imports
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import actions
import * as subreddit from './actions/subreddit';
import * as comments from './actions/comments';

import Navbar from './components/Navbar/Navbar';

import '../sass/main.scss';

class Index extends Component {

componentDidMount(){
  console.log(this.props);
}
  render() {
    return (
      <div>
        <Navbar />
          {React.cloneElement(this.props.children, this.props)}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    subreddit: state.subreddit,
    comments: state.comments,
    routing: state.routing
  }
}

function mapDispachToProps(dispatch) {
  return {
    actions : {
      subreddit : bindActionCreators(subreddit, dispatch),
      comments  : bindActionCreators(comments, dispatch)
    }
  }
}

const App = connect(mapStateToProps, mapDispachToProps)(Index);

export default App;