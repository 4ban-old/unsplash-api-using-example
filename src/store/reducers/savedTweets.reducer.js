const saved = JSON.parse(localStorage.getItem("tweets"));

export default (state = saved ? saved : [], action) => {
  switch (action.type) {
    case "SET_SAVED_TWEETS":
      return action.payload;
    default:
      return state;
  }
};
