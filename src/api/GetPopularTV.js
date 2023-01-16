import { api, API_KEY } from "./api";

export const getPopularTV = (page) => {
  return api(
    "GET",
    `tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    null
  );
};
