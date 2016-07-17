import React from "react";
import { IndexLink, Link } from "react-router";

import "./Navbar.scss";

export default class Navbar extends React.Component {
  
  componentDidMount(){
  }
  render() {
    
    const module = this.props.theme.module;
    const font = this.props.theme.font;
    
    return (
          <nav class={"Navbar-navbar " + module}>
            <div class="Navbar-container">
                <Link to="/" class={"Navbar-brand Navbar-text Navbar-left " + font}>SReddit</Link>
                <Link to="/r/all" class={"Navbar-text Navbar-left " + font}>r/all</Link>
                
                <div class="Navbar-text Navbar-right">
                  <a href="https://github.com/mgerb42/sreddit" class={font} target="_blank">
                    <i class="fa fa-github fa-2 " aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </nav>
    );
  }
}
