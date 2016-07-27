import React from "react";
import "./Sidebar.scss";

export default class RedditPost extends React.Component {
  render() {
    const autoLoad = this.props.app.autoLoad;
    const theme = this.props.app.theme;
    const actions = this.props.actions;
    
    return (
      <div class={"row Sidebar-row " +theme.module}>
        <div class="col-lg-12 ">
        
          <div class="row">
            <span>Dark Theme</span>
            <div class={"Sidebar-checkbox " + theme.module}>
              <input type="checkbox" id="themeCheckBox" checked={theme.background == 'dark' ? true : false} onChange={actions.toggleTheme}/>
              <label for="themeCheckBox"></label>
            </div>
          </div>
          <br/>
          <div class="row">
            <span>Auto Load Posts</span>
            <div class={"Sidebar-checkbox " + theme.module}>
              <input type="checkbox" id="autoLoadCheckBox" checked={autoLoad ? true : false} onChange={actions.toggleAutoLoad}/>
              <label for="autoLoadCheckBox"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}