export const handleResponse = (response) => {
  if (response.ok) return response.json();

  throw Error('An API call failed');
};
