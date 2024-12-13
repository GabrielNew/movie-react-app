export const getPopularMovies = async () => {
  let json = null;
  const response = await fetch(
    `${import.meta.env.VITE_MOVIEDB_API_URL}/movie/popular?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }`
  );
  json = await response.json();
  return json.results;
};

export const searchMovies = async (query) => {
  let json = null;
  const response = await fetch(
    `${import.meta.env.VITE_MOVIEDB_API_URL}/search/movie?api_key=${
      import.meta.env.VITE_MOVIEDB_API_KEY
    }&query=${encodeURIComponent(query)}`
  );
  json = await response.json();
  return json.results;
};
