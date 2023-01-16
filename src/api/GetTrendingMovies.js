import { api, API_KEY } from "./api";

export const getTrendingMovies = () => {
  return api("GET", `trending/movie/day?api_key=${API_KEY}`, null);
};
