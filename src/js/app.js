//redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';
import Index from './pages/Index/Index';

function mapStateToProps(state) {
  return {
    subreddit: state.subreddit,
    routing: state.routing
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Index);

export default App;