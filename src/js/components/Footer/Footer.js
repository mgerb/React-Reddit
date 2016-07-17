import React from "react";

import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class={"row Footer " + this.props.theme.module}>
          <div class={"col-lg-12 " + this.props.theme.module}>
            <p>This is a test footer</p>
          </div>
        </div>
      </footer>
    );
  }
}
