import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }
  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-bar">
          <input
            type="text"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
