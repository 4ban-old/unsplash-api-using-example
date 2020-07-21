export const setTweets = (tweets) => ({
  type: "SET_TWEETS",
  payload: tweets,
});

export const setSavedTweets = (tweets) => ({
  type: "SET_SAVED_TWEETS",
  payload: tweets,
});

export const setTweetToSave = (tweet) => ({
  type: "SET_TWEET_TO_SAVE",
  payload: tweet,
});
