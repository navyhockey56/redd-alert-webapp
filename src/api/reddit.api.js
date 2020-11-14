import { handleResponse } from './utils';

export const subreddit = (subreddit_name) => {
  return fetch(`/api/v1/reddit/${subreddit_name}`).then(handleResponse);
}
