import { api, API_KEY } from "./api";

export const getTrendingTV = () => {
  return api("GET", `trending/tv/day?api_key=${API_KEY}`, null);
};

export const getTopRatedTV = () => {
  return api("GET", `tv/top_rated?api_key=${API_KEY}&page=1`, null);
};

export const getPopularTV = (page) => {
  return api("GET", `tv/popular?api_key=${API_KEY}&page=${page}`, null);
};

export const getSearchTVList = (page, searchKeyWords) => {
  return api(
    "GET",
    `search/tv?api_key=${API_KEY}&page=${page}&query=${searchKeyWords}`,
    null
  );
};

export const getTVDetail = (tvID) => {
  return api("GET", `tv/${tvID}?api_key=${API_KEY}`, null);
};

export const getSimilarTV = (tvID) => {
  return api("GET", `tv/${tvID}/similar?api_key=${API_KEY}&page=1`, null);
};

export const getTVCredits = (tvID) => {
  return api("GET", `tv/${tvID}/credits?api_key=${API_KEY}`, null);
};

export const getTVVideos = (tvID) => {
  return api("GET", `tv/${tvID}/videos?api_key=${API_KEY}`, null);
};
