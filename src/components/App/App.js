import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar";
import Header from "../Header";
import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

import api from "../../api";

// Twitter API doesn't work because of CORS policy issue that can't be resolved without backend
// import { twitter } from "../../api";
const App = () => {
  const [tweets, setTweets] = useState([]);
  const [savedTweets, setSavedTweets] = useState([]);
  const [tweetToSave, setTweetToSave] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tweets"));
    setSavedTweets(saved ? saved : []);
  }, []);

  const onFinalSubmit = async (query) => {
    const response = await api.get("/search/photos", {
      params: {
        query,
        per_page: 10,
      },
    });
    setTweets(response.data.results);
  };

  const onSubmit = (query) => {
    // query handler that does the API request passed through props in that way:
    // App -> LeftColumn -> SearchBar
    // Can be refactored with Redux or React context
    onFinalSubmit(query);
  };

  // Twitter SPI doesn't work because of CORS policy issue that can't be resolver without backend
  // const onFinalSubmit = (query) => {
  //   twitter.get("search/tweets", { q: `${query}`, count: 10 }, function (
  //     err,
  //     data,
  //     response
  //   ) {
  //     console.log(data);
  //   });
  // };

  const onDrop = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("tweets"));
    if (saved) {
      saved.push(tweetToSave);
      localStorage.setItem("tweets", JSON.stringify(saved));
    } else {
      localStorage.setItem("tweets", JSON.stringify([tweetToSave]));
    }
    setSavedTweets(JSON.parse(localStorage.getItem("tweets")));

    var data = e.dataTransfer.getData("tweet");
    document.getElementById(data).style.display = "none";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e, tweet) => {
    setTweetToSave(tweet);
    e.dataTransfer.setData("tweet", e.target.id);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setSavedTweets([]);
  };

  const removeSavedTweet = (id) => {
    const saved = JSON.parse(localStorage.getItem("tweets"));
    const updated = saved.filter((tweet) => tweet.id !== id);
    if (updated.length) localStorage.setItem("tweets", JSON.stringify(updated));
    else localStorage.setItem("tweets", "[]");
    setSavedTweets(JSON.parse(localStorage.getItem("tweets")));
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
          <LeftColumn
            onFinalSubmit={onFinalSubmit}
            tweets={tweets}
            onDragStart={onDragStart}
          />
        </div>
        <div className="column" onDragOver={onDragOver} onDrop={onDrop}>
          <RightColumn
            tweets={savedTweets}
            onDragStart={onDragStart}
            removeSavedTweet={removeSavedTweet}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
