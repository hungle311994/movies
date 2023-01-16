import { api, API_KEY } from "./api";

export const getTopRatedMovies = () => {
  return api(
    "GET",
    `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    null
  );
};
