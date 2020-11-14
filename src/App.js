import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AppNav from './components/app-nav/AppNav';
import SubredditPage from './pages/subreddit/SubredditPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppNav />
        <Route path="/" exact component={HomePage} />
        <Route path="/subreddit" component={SubredditPage} />
      </BrowserRouter>
    </>
  )
}
