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
            <Link class={"Sortbar-links " + this.props.theme.font} to={subreddit + "/top?sort=top&t=all"}>top</Link>
              <Link class={"Sortbar-links Sortbar-sort " + this.props.theme.font} to={subreddit + "/top?sort=top&t=all"}>all</Link>
              <Link class={"Sortbar-links Sortbar-sort " + this.props.theme.font} to={subreddit + "/top?sort=top&t=year"}>year</Link>
              <Link class={"Sortbar-links Sortbar-sort " + this.props.theme.font} to={subreddit + "/top?sort=top&t=month"}>month</Link>
              <Link class={"Sortbar-links Sortbar-sort " + this.props.theme.font} to={subreddit + "/top?sort=top&t=week"}>week</Link>
              <Link class={"Sortbar-links Sortbar-sort " + this.props.theme.font} to={subreddit + "/top?sort=top&t=day"}>day</Link>
          </div>
        </div>
    );
  }
}