import React from "react";
import "./Sidebar.scss";

export default class RedditPost extends React.Component {
  render() {
    return (
      <div class={"row Sidebar-row " + this.props.theme.module}>
        <div class="col-lg-12 ">
        <label for="themeCheckBox" class="Sidebar-label">Dark Theme</label>
        <input type="checkbox" id="themeCheckBox" checked={this.props.theme.background == 'dark' ? true : false} onChange={this.props.toggleTheme}/>
        </div>
      </div>
    );
  }
}