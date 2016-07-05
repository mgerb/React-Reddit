import React, {Component} from "react";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Navbar";
import PostsContainer from "../Subreddit/Subreddit";

import "./Index.scss";

export default class Index extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
          {React.cloneElement(this.props.children, this.props)}
      </div>

    );
  }
}
