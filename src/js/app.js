//redux imports
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';
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
    routing: state.routing
  }
}

function mapDispachToProps(dispatch) {
  return {
    actions : {
      subreddit : bindActionCreators(actionCreators, dispatch)
    }
  }
}

const App = connect(mapStateToProps, mapDispachToProps)(Index);

export default App;