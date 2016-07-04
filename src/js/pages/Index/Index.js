import React from "react";
import { Link } from "react-router";

import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Navbar";
import PostsContainer from "../Subreddit/Subreddit";

import "./Index.scss";

export default class Index extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
          {this.props.children}
      </div>

    );
  }
}
