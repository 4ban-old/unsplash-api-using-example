export default (state = {}, action) => {
  switch (action.type) {
    case "SET_TWEET_TO_SAVE":
      return action.payload;
    default:
      return state;
  }
};
