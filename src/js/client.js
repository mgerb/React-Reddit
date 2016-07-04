import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Index from "./pages/Index/Index";
import Subreddit from "./pages/Subreddit/Subreddit";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute  component={Subreddit}></IndexRoute>
      <Route path="/r/:subreddit" component={Subreddit}></Route>
    </Route>
  </Router>,
app);
