import React from "react";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";
const RightColumn = ({ tweets, onDragStart, removeSavedTweet }) => {
  const renderList = () => {
    if (tweets.length === 0) return <Loading text="No saved tweets" />;
    else
      return tweets.map((tweet) => {
        return (
          <TweetItem
            tweet={tweet}
            key={tweet.id}
            onDragStart={onDragStart}
            removable={true}
            removeSavedTweet={removeSavedTweet}
          />
        );
      });
  };
  return <div id="rightColumn">{renderList()}</div>;
};

export default RightColumn;
