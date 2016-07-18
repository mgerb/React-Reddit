//redux imports
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import actions
import * as subreddit from './actions/subreddit';
import * as comments from './actions/comments';
import * as app from './actions/app';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import '../sass/main.scss';

class Index extends Component {

  componentDidMount(){
    
  }
  
  render() {
    //set background color of page
    document.body.className = this.props.app.theme.background;
    
    return (
      <div>
        <Navbar theme={this.props.app.theme} subreddit={this.props.subreddit.subreddit}/>
          {React.cloneElement(this.props.children, this.props)}
        <Footer theme={this.props.app.theme}/>
      </div>
    );
  }
}

//map redux state to props
function mapStateToProps(state) {
  return {
    app: state.app,
    comments: state.comments,
    routing: state.routing,
    subreddit: state.subreddit
  }
}

function mapDispachToProps(dispatch) {
  return {
    actions : {
      app       : bindActionCreators(app, dispatch),
      comments  : bindActionCreators(comments, dispatch),
      subreddit : bindActionCreators(subreddit, dispatch)
    }
  }
}

const App = connect(mapStateToProps, mapDispachToProps)(Index);

export default App;