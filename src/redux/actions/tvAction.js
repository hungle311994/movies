import {
  getPopularTV,
  getSearchTVList,
  getSimilarTV,
  getTopRatedTV,
  getTrendingTV,
  getTVCredits,
  getTVDetail,
  getTVVideos,
} from "../../api/GetTV";
import {
  GET_POPULAR_TV,
  GET_SIMILAR_TV,
  GET_TOP_RATED_TV,
  GET_TRENDING_TV,
  GET_TV_CREDITS,
  GET_TV_DETAIL,
  GET_TV_VIDEOS,
  SEARCH_TV_LIST,
  SET_SEASONS_TV_ITEM,
} from "../types";

// Trending TV
export const actionFetchTrendingTVListAPI = () => {
  return async (dispatch) => {
    const res = await getTrendingTV();
    dispatch(actionFetchTrendingTVList(res.data.results));
  };
};

export const actionFetchTrendingTVList = (trendingTVListAPI) => {
  return {
    type: GET_TRENDING_TV,
    payload: trendingTVListAPI,
  };
};

// Top rated TV
export const actionFetchTopRatedTVListAPI = () => {
  return async (dispatch) => {
    const res = await getTopRatedTV();
    dispatch(actionFetchTopRatedTVList(res.data.results));
  };
};

export const actionFetchTopRatedTVList = (topRatedTVListAPI) => {
  return {
    type: GET_TOP_RATED_TV,
    payload: topRatedTVListAPI,
  };
};

// Popular TV
export const actionFetchPopularTVListAPI = (page) => {
  return async (dispatch) => {
    const res = await getPopularTV(page);
    dispatch(actionFetchPopularTVList(res.data.results));
  };
};

export const actionFetchPopularTVList = (popularTVListAPI) => {
  return {
    type: GET_POPULAR_TV,
    payload: popularTVListAPI,
  };
};

// Get TV Detail List
export const actionGetTVDetailListAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getTVDetail(tvID);
    dispatch(actionGetTVDetailList(res.data));
    // console.log(res.data);
  };
};

export const actionGetTVDetailList = (tvDetailList) => {
  return {
    type: GET_TV_DETAIL,
    payload: tvDetailList,
  };
};

// Get Similar TV
export const actionGetSimilarTVAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getSimilarTV(tvID);
    dispatch(actionGetSimilarTV(res.data.results));
    // console.log(res.data);
  };
};

export const actionGetSimilarTV = (similarTVList) => {
  return {
    type: GET_SIMILAR_TV,
    payload: similarTVList,
  };
};

// Set Seasons TV
export const actionSetSeasonsTV = (seaesonsTV) => {
  return {
    type: SET_SEASONS_TV_ITEM,
    payload: seaesonsTV,
  };
};

// Search TV Detail
export const actionSearchTVListAPI = (page, searchKeyWords) => {
  return async (dispatch) => {
    const res = await getSearchTVList(page, searchKeyWords);
    dispatch(actionSearchTVDetail(res.data.results));
  };
};

export const actionSearchTVDetail = (tvSearch) => {
  return {
    type: SEARCH_TV_LIST,
    payload: tvSearch,
  };
};

// Get TV Videos
export const actionTVVideosAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getTVVideos(tvID);
    dispatch(actionTVVideos(res.data.results));
  };
};

export const actionTVVideos = (tvVideos) => {
  return {
    type: GET_TV_VIDEOS,
    payload: tvVideos,
  };
};

// Get TV Credits
export const actionTVCreditsAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getTVCredits(tvID);
    dispatch(actionTVCredits(res.data.cast));
  };
};

export const actionTVCredits = (tvCredits) => {
  return {
    type: GET_TV_CREDITS,
    payload: tvCredits,
  };
};
