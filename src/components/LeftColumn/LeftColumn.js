import React from "react";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";
const LeftColumn = ({ tweets, onDragStart }) => {
  const renderList = () => {
    if (tweets.length === 0) return <Loading text="Nothing to show" />;
    else
      return tweets.map((tweet) => {
        return (
          <TweetItem tweet={tweet} key={tweet.id} onDragStart={onDragStart} />
        );
      });
  };

  return <div id="leftColumn">{renderList()}</div>;
};

export default LeftColumn;
