import { combineReducers } from "redux";

import tweetsReducer from "./tweets.reducer";
import savedTweetsReducer from "./savedTweets.reducer";
import tweetToSaveReducer from "./tweetToSave.reducer";

export default combineReducers({
  tweets: tweetsReducer,
  savedTweets: savedTweetsReducer,
  tweetToSave: tweetToSaveReducer,
});
