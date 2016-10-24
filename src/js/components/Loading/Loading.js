import React from "react";

import image from '../../../assets/images/wheel.svg';
import './Loading.scss';

export default class Loading extends React.Component {
  render() {
    return (
      <div class="row Loading-row">
        <div class="col-xs-12 center">
            <img class="img-responsive" src={image} alt="loading"></img>
        </div>
      </div>
    );
  }
}
