import React from "react";
import "./App.css";
import SearchBar from "../SearchBar";
import Header from "../Header";
import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

import api from "../../api";

// Twitter API doesn't work because of CORS policy issue that can't be resolved without backend
// import { twitter } from "../../api";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      savedTweets: [],
      tweetToSave: {},
    };
  }
  componentDidMount() {
    const saved = JSON.parse(localStorage.getItem("tweets"));
    this.setState({ savedTweets: saved ? saved : [] });
  }

  async onFinalSubmit(query) {
    const response = await api.get("/search/photos", {
      params: {
        query,
        per_page: 10,
      },
    });
    this.setState({ tweets: response.data.results });
  }

  onSubmit(query) {
    // query handler that does the API request passed through props in that way:
    // App -> LeftColumn -> SearchBar
    // Can be refactored with Redux or React context
    this.onFinalSubmit(query);
  }

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

  onDrop(e) {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("tweets"));
    if (saved) {
      saved.push(this.state.tweetToSave);
      localStorage.setItem("tweets", JSON.stringify(saved));
    } else {
      localStorage.setItem("tweets", JSON.stringify([this.state.tweetToSave]));
    }
    this.setState({ savedTweets: JSON.parse(localStorage.getItem("tweets")) });

    var data = e.dataTransfer.getData("tweet");
    document.getElementById(data).style.display = "none";
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDragStart(e, tweet) {
    this.setState({ tweetToSave: tweet });
    e.dataTransfer.setData("tweet", e.target.id);
  }

  clearLocalStorage() {
    localStorage.clear();
    this.setState({ savedTweets: [] });
  }

  removeSavedTweet(id) {
    const saved = JSON.parse(localStorage.getItem("tweets"));
    const updated = saved.filter((tweet) => tweet.id !== id);
    if (updated.length) localStorage.setItem("tweets", JSON.stringify(updated));
    else localStorage.setItem("tweets", "[]");
    this.setState({ savedTweets: JSON.parse(localStorage.getItem("tweets")) });
  }

  render() {
    return (
      <div className="App">
        <Header text="Tweet Saver" />
        <div className="columnWrapper">
          <div className="searchBarWrapper">
            <SearchBar onSubmit={(query) => this.onSubmit(query)} />
          </div>
          <button
            onClick={() => this.clearLocalStorage()}
            className="clearButton"
          >
            Clear LocalStorage
          </button>
        </div>
        <div className="columnWrapper">
          <div className="column">
            <LeftColumn
              onFinalSubmit={(query) => this.onFinalSubmit(query)}
              tweets={this.state.tweets}
              onDragStart={(tweet) => this.onDragStart(tweet)}
            />
          </div>
          <div
            className="column"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)}
          >
            <RightColumn
              tweets={this.state.savedTweets}
              onDragStart={(e, tweet) => this.onDragStart(e, tweet)}
              removeSavedTweet={(id) => this.removeSavedTwee(id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
