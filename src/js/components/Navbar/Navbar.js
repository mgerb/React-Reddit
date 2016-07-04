import React from "react";
import { IndexLink, Link } from "react-router";
import "./Navbar.scss";

export default class Navbar extends React.Component {

  render() {

    return (
        <nav class="navbar Navbar">
          <a class="navbar-brand" href="#">SReddit</a>
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
        </nav>
    );
  }
}
