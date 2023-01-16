import { api, API_KEY } from "./api";

export const getTrendingTV = () => {
  return api("GET", `trending/tv/day?api_key=${API_KEY}`, null);
};
