import { api, API_KEY } from "./api";

export const getPopularMovies = (page) => {
  return api(
    "GET",
    `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    null
  );
};
