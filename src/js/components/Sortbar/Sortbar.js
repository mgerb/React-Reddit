import React from "react";
import "./Sortbar.scss";

export default class Sortbar extends React.Component {
  
  componentDidMount(){
    
  }
  
  render() {
    return (
        <div class={"row Sortbar " + this.props.theme.module}>
          <div class="col-xs-12 ">
            <a class="Sortbar-links" href="/">hot</a>
            <a class="Sortbar-links" href="/">new</a>
            <a class="Sortbar-links" href="/">rising</a>
            <a class="Sortbar-links" href="/">controversial</a>
            <a class="Sortbar-links" href="/">top</a>
            <a class="Sortbar-links" href="/">gilded</a>
          </div>
        </div>
    );
  }
}