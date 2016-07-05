import React from "react";
import { IndexLink, Link } from "react-router";

import "./Navbar.scss";

export default class Navbar extends React.Component {

  render() {

    return (
        <nav class="Navbar-navbar">
          <div class="Navbar-container">
              <a href="/" class="Navbar-brand Navbar-text Navbar-left">SReddit</a>
              
              <div class="Navbar-text Navbar-right">
                <a href="https://github.com/mgerb42/sreddit" class="Navbar-font-color" target="_blank">
                  <i class="fa fa-github fa-2" aria-hidden="true"></i>
                </a>
              </div>
          </div>
        </nav>
    );
  }
}
