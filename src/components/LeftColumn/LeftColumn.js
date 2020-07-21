import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";

import { setTweetToSave } from "../../store/actions/tweets.actions";
const LeftColumn = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);

  const onDragStart = (e, tweet) => {
    dispatch(setTweetToSave(tweet));
    e.dataTransfer.setData("tweet", e.target.id);
  };
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
