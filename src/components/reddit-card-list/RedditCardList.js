import React from 'react';
import PropTypes from 'prop-types';
import RedditCard from '../reddit-card/RedditCard';

const RedditCardList = ({ listings, subreddit }) => {
  return (
    <div style={{ paddingTop: "1em", textAlign: 'center' }}>
      <h2>r/{subreddit}</h2>
      { listings.map((listing, index) => <RedditCard key={index} {...listing}/>) }
    </div>
  );
}

RedditCardList.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
  subreddit: PropTypes.string.isRequired
};

RedditCardList.defaultProps = {
  listings: [],
  subreddit: ''
};

export default RedditCardList;
