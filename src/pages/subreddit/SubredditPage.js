import React, { useState } from 'react';
import * as redditApi from '../../api/reddit.api';
import RedditCardList from '../../components/reddit-card-list/RedditCardList';

import './subreddit-page.css';

export default function SubredditPage() {
  const [subreddit, setSubreddit] = useState('');
  const [listings, setListings] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);

  const updateSubreddit = (event) => setSubreddit(event.target.value);

  const fetchSubreddit = () => {
    if (loadingResults) return;

    setLoadingResults(true);
    redditApi.subreddit(subreddit).then(listings => {
      setListings(listings);
      setLoadingResults(false);
    }).catch(error => {
      setLoadingResults(false);
      alert(`An error occurred ${error}`);
    });
  };

  return (
    <>
    <h1>Subreddit Search</h1>
    <div className="search-box">
      <label htmlFor="subreddit">Subreddit</label>
      <input id="subreddit" value={subreddit} onChange={updateSubreddit} />
      <button onClick={fetchSubreddit}>{ loadingResults ? "Loading..." : "Search" }</button>
    </div>
    { listings.length > 0 && <RedditCardList listings={listings} subreddit={subreddit} /> }
    </>
  );
}
