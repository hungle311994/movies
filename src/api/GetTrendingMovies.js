import { api, API_KEY } from "./api";

export const getTrendingMovies = () => {
  return api("GET", `trending/all/day?api_key=${API_KEY}`, null);
};
