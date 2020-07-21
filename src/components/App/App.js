import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import SearchBar from "../SearchBar";
import Header from "../Header";
import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

import api from "../../api";
import { setTweets, setSavedTweets } from "../../store/actions/tweets.actions";

const App = () => {
  const dispatch = useDispatch();

  const tweetToSave = useSelector((state) => state.tweetToSave);

  const onSubmit = async (query) => {
    const response = await api.get("/search/photos", {
      params: {
        query,
        per_page: 10,
      },
    });
    dispatch(setTweets(response.data.results));
  };

  const onDrop = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("tweets"));
    if (saved) {
      saved.push(tweetToSave);
      localStorage.setItem("tweets", JSON.stringify(saved));
    } else {
      localStorage.setItem("tweets", JSON.stringify([tweetToSave]));
    }
    dispatch(setSavedTweets(JSON.parse(localStorage.getItem("tweets"))));

    var data = e.dataTransfer.getData("tweet");
    document.getElementById(data).style.display = "none";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(setSavedTweets([]));
  };

  return (
    <div className="App">
      <Header text="Tweet Saver" />
      <div className="columnWrapper">
        <div className="searchBarWrapper">
          <SearchBar onSubmit={onSubmit} />
        </div>
        <button onClick={clearLocalStorage} className="clearButton">
          Clear LocalStorage
        </button>
      </div>
      <div className="columnWrapper">
        <div className="column">
          <LeftColumn />
        </div>
        <div className="column" onDragOver={onDragOver} onDrop={onDrop}>
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default App;
