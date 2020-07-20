import React from "react";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";

class LeftColumn extends React.Component {
  renderList() {
    if (this.props.tweets.length === 0 || this.props.tweets[0] == null)
      return <Loading text="Nothing to show" />;
    else
      return this.props.tweets.map((tweet) => {
        return (
          <TweetItem
            tweet={tweet}
            key={tweet.id}
            onDragStart={(e, tweet) => this.props.onDragStart(e, tweet)}
          />
        );
      });
  }
  render() {
    return <div id="leftColumn">{this.renderList()}</div>;
  }
}
export default LeftColumn;
