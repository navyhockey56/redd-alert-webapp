import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>{" | "}
      <NavLink to="/subreddit">Subreddit</NavLink>
    </nav>
  );
}
