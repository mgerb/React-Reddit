import React from "react";
import { IndexLink, Link } from "react-router";

import "./Navbar.scss";

export default class Navbar extends React.Component {

  render() {
    
    const module = this.props.theme.module;
    const font = this.props.theme.font;
    const defaultSubreddits = ['all', 'multicopter', 'fpv',];
    let active = this.props.subreddit === '' ? 'active' : '';
    
    return (
          <nav class={"Navbar-navbar " + module}>
            <div class="Navbar-container">
                <Link id="frontpage" to="/" class={"Navbar-brand Navbar-text Navbar-left " + font + " " + active}>SReddit</Link>

                {defaultSubreddits.map((subreddit, index) => {
                  this.props.subreddit.toUpperCase() == subreddit.toUpperCase() ? active = 'active' : active = '';

                  return <Link to={"/r/" + subreddit} id={subreddit} key={index} class={"Navbar-text Navbar-left " + font + " " + active}>{subreddit}</Link>
                })}
                
                <div class="Navbar-text Navbar-right">
                  <a href="https://github.com/mgerb/sreddit" class={font} target="_blank">
                    <i class="fa fa-github fa-2 " aria-hidden="true"></i>
                  </a>
                </div>
            </div>
          </nav>
    );
  }
}
