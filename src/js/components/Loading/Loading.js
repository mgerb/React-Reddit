import React from "react";
import './Loading.scss';

export default class Loading extends React.Component {
  render() {
    return (
      <div class="row Loading-row">
        <div class="col-xs-12 center">
            <img class="img-responsive" src="/images/wheel.svg" alt="loading"></img>
        </div>
      </div>
    );
  }
}
