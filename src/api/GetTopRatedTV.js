import { api, API_KEY } from "./api";

export const getTopRatedTV = () => {
  return api(
    "GET",
    `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    null
  );
};
