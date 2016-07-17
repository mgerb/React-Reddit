import React from "react";
import "./Sidebar.scss";

export default class RedditPost extends React.Component {
  
  componentDidMount(){
    
  }
  
  render() {
    return (
      <div class={"row Sidebar-row " + this.props.theme.module}>
        <div class="col-lg-12 ">
        <span>Dark Theme </span>
        <input type="checkbox" id="themeCheckBox" checked={this.props.theme.background == 'dark' ? true : false} onChange={this.props.toggleTheme}/>
          <hr/>
        </div>
      </div>
    );
  }
}