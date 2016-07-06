import React from "react";
import { IndexLink, Link } from "react-router";

import "./Navbar.scss";

export default class Navbar extends React.Component {

  render() {

    return (
        <div class="Navbar">
          <nav class="Navbar-navbar">
            <div class="Navbar-container">
                <Link to="/" class="Navbar-brand Navbar-text Navbar-left">SReddit</Link>
                <Link to="/r/all" class="Navbar-text Navbar-left">r/all</Link>
                
                <div class="Navbar-text Navbar-right">
                  <a href="https://github.com/mgerb42/sreddit" class="Navbar-font-color" target="_blank">
                    <i class="fa fa-github fa-2" aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </nav>
        </div>
    );
  }
}
