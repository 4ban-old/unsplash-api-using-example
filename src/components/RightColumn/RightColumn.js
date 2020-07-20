import React from "react";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";
class RightColumn extends React.Component {
  renderList() {
    console.log(this.props.tweets);
    if (this.props.tweets.length === 0 || this.props.tweets[0] == null)
      return <Loading text="No saved tweets" />;
    else
      return this.props.tweets.map((tweet) => {
        return (
          <TweetItem
            tweet={tweet}
            key={tweet.id}
            onDragStart={(e, tweet) => this.props.onDragStart(e, tweet)}
            removable={true}
            removeSavedTweet={(id) => this.props.removeSavedTweet(id)}
          />
        );
      });
  }
  render() {
    return <div id="rightColumn">{this.renderList()}</div>;
  }
}

export default RightColumn;
