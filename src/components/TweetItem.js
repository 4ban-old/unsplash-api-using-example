import React from "react";
import "./TweetItem.css";

// Component is kinda big so I'd split it to a number of components when refactor
// Components: Avatar, Author, Date, Description
const TweetItem = ({ tweet, onDragStart, removable, removeSavedTweet }) => {
  const renderRemove = () => {
    if (removable)
      return <button onClick={() => removeSavedTweet(tweet.id)}>remove</button>;
  };

  return (
    <div
      className="tweet-card"
      id={tweet.id}
      draggable="true"
      onDragStart={(e) => onDragStart(e, tweet)}
    >
      <img
        className="tweet-avatar"
        src={tweet.urls.thumb}
        alt={tweet.description}
      />
      <div>
        <div className="tweet-author">
          <a
            href={tweet.user.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-name"
          >
            {tweet.user.first_name} {tweet.user.last_name}
          </a>
          <span className="tweet-handle">
            <a
              href={tweet.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tweet.user.username ? `@${tweet.user.username}` : ""}
            </a>
          </span>
          <span className="tweet-time">
            {new Date(tweet.updated_at).toISOString().slice(0, 10)}
          </span>
          <span className="tweet-remove">{renderRemove()}</span>
        </div>
        <p>
          {tweet.description ? tweet.description : "No description provided"}
        </p>
      </div>
    </div>
  );
};

export default TweetItem;
