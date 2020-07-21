import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetItem from "../TweetItem.js";
import Loading from "../Loading";

import {
  setTweetToSave,
  setSavedTweets,
} from "../../store/actions/tweets.actions";
const RightColumn = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.savedTweets);

  const onDragStart = (e, tweet) => {
    dispatch(setTweetToSave(tweet));
    e.dataTransfer.setData("tweet", e.target.id);
  };

  const removeSavedTweet = (id) => {
    const saved = JSON.parse(localStorage.getItem("tweets"));
    const updated = saved.filter((tweet) => tweet.id !== id);
    if (updated.length) localStorage.setItem("tweets", JSON.stringify(updated));
    else localStorage.setItem("tweets", "[]");
    dispatch(setSavedTweets(JSON.parse(localStorage.getItem("tweets"))));
  };

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
