import {
  GET_TOP_RATED_TV,
  GET_TRENDING_TV,
  GET_POPULAR_TV,
  SEARCH_TV_LIST,
  GET_TV_DETAIL,
  GET_SIMILAR_TV,
  SET_SEASONS_TV_ITEM,
  GET_TV_VIDEOS,
  GET_TV_CREDITS,
} from "../types";

const initialState = {
  trendingTVList: [],
  topRatedTVList: [],
  popularTVList: [],
  tvSearchList: [],
  tvDetail: [],
  similarTVList: [],
  seasonsTVItem: [],
  tvVideos: [],
  tvCredits: [],
};

export const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_TV:
      return { ...state, trendingTVList: action.payload };

    case GET_TOP_RATED_TV:
      return { ...state, topRatedTVList: action.payload };

    case GET_POPULAR_TV:
      return { ...state, popularTVList: action.payload };

    case SEARCH_TV_LIST:
      return { ...state, tvSearchList: action.payload };

    case GET_TV_DETAIL:
      return { ...state, tvDetail: action.payload };

    case GET_SIMILAR_TV:
      return { ...state, similarTVList: action.payload };

    case SET_SEASONS_TV_ITEM:
      return { ...state, seasonsTVItem: action.payload };

    case GET_TV_VIDEOS:
      return { ...state, tvVideos: action.payload };

    case GET_TV_CREDITS:
      return { ...state, tvCredits: action.payload };

    default:
      return { ...state };
  }
};
