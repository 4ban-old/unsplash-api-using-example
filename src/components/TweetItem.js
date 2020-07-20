import React from "react";
import "./TweetItem.css";

// Component is kinda big so I'd split it to a number of components when refactor
// Components: Avatar, Author, Date, Description
class TweetItem extends React.Component {
  renderRemove() {
    if (this.props.removable)
      return (
        <button
          onClick={(id) => this.props.removeSavedTweet(this.props.tweet.id)}
        >
          remove
        </button>
      );
  }

  render() {
    return (
      <div
        className="tweet-card"
        id={this.props.tweet.id}
        draggable="true"
        onDragStart={(e) => this.props.onDragStart(e, this.props.tweet)}
      >
        <img
          className="tweet-avatar"
          src={this.props.tweet.urls.thumb}
          alt={this.props.tweet.description}
        />
        <div>
          <div className="tweet-author">
            <a
              href={this.props.tweet.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="tweet-name"
            >
              {this.props.tweet.user.first_name}{" "}
              {this.props.tweet.user.last_name}
            </a>
            <span className="tweet-handle">
              <a
                href={this.props.tweet.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.tweet.user.username
                  ? `@${this.props.tweet.user.username}`
                  : ""}
              </a>
            </span>
            <span className="tweet-time">
              {new Date(this.props.tweet.updated_at).toISOString().slice(0, 10)}
            </span>
            <span className="tweet-remove">{this.renderRemove()}</span>
          </div>
          <p>
            {this.props.tweet.description
              ? this.props.tweet.description
              : "No description provided"}
          </p>
        </div>
      </div>
    );
  }
}

export default TweetItem;
