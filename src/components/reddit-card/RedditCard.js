import React from 'react';
import PropTypes from 'prop-types';

import "./reddit-card.css";

const RedditCard = (props) => {
  return (
    <div className="reddit-card">
      <h2>{props.title}</h2>
      <p><b>Author</b> {props.author}</p>
      <img src={props.thumbnail} />
      { props.text.split("\n").map((text, index) => <p key={index}>{text}</p>) }
      <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
    </div>
  );
};

RedditCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string
};

RedditCard.defaultProps = {
  text: ''
};

export default RedditCard;
