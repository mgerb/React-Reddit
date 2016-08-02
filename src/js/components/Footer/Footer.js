import React from "react";

import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer class={"Footer " + this.props.theme.module}>
        <span class={"Footer-text " + this.props.theme.font}>Check out this project on <a href="https://github.com/mgerb/react-reddit" class={this.props.theme.font} target="_blank">
	            GitHub <i class="fa fa-github fa-2" aria-hidden="true"></i>
	        </a></span>
      </footer>
    );
  }
}
