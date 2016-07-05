//react imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

//redux imports
import {Provider} from 'react-redux';
import store, {history} from './store/store';

//component imports
import App from "./app.js";
import Subreddit from "./pages/Subreddit/Subreddit";
import Comments from "./pages/Comments/Comments";

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
	  <Router history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Subreddit}></IndexRoute>
	      <Route path="/r/:subreddit" component={Subreddit}></Route>
	      <Route path="/r/:subreddit/comments/:id/:title" component={Comments}></Route>
	    </Route>
	  </Router>
	</Provider>,
  app
);
