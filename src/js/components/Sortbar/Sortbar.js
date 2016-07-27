import React from "react";
import { Link } from 'react-router';

import "./Sortbar.scss";

export default class Sortbar extends React.Component {
  render() {
    const subreddit = this.props.subreddit === '' ? '' : '/r/' + this.props.subreddit;
    
    return (
        <div class={"row Sortbar " + this.props.theme.module}>
          <div class="col-xs-12 ">
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/hot"}>hot</Link>
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/new"}>new</Link>
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/rising"}>rising</Link>
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/controversial"}>controversial</Link>
            <div class="Sortbar-dropdown">
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/top?sort=top&t=all"}>top</Link>
            <ul class={"Sortbar-dropdown-menu " + this.props.theme.module}>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=all"}><li>all</li></Link>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=year"}><li>year</li></Link>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=month"}><li>month</li></Link>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=week"}><li>week</li></Link>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=day"}><li>day</li></Link>
              <Link class={this.props.theme.font} to={subreddit + "/top?sort=top&t=hour"}><li>hour</li></Link>
            </ul>
            </div>
          </div>
        </div>
    );
  }
}