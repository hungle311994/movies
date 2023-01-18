import {
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_TV,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV,
  SEARCH_MOVIES_LIST,
  SEARCH_TV_LIST,
  GET_MOVIES_DETAIL,
  GET_SIMILAR_MOVIES,
  GET_TV_DETAIL,
  GET_SIMILAR_TV,
} from "../types";

const initialState = {
  trendingMoviesList: [],
  topRatedMoviesList: [],
  trendingTVList: [],
  topRatedTVList: [],
  popularMoviesList: [],
  popularTVList: [],
  moviesSearchList: [],
  tvSearchList: [],
  moviesDetail: [],
  similarMoviesList: [],
  tvDetail: [],
  similarTVList: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return { ...state, trendingMoviesList: action.payload };

    case GET_TOP_RATED_MOVIES:
      return { ...state, topRatedMoviesList: action.payload };

    case GET_TRENDING_TV:
      return { ...state, trendingTVList: action.payload };

    case GET_TOP_RATED_TV:
      return { ...state, topRatedTVList: action.payload };

    case GET_POPULAR_MOVIES:
      return { ...state, popularMoviesList: action.payload };

    case GET_POPULAR_TV:
      return { ...state, popularTVList: action.payload };

    case SEARCH_MOVIES_LIST:
      return { ...state, moviesSearchList: action.payload };

    case SEARCH_TV_LIST:
      return { ...state, tvSearchList: action.payload };

    case GET_MOVIES_DETAIL:
      return { ...state, moviesDetail: action.payload };

    case GET_SIMILAR_MOVIES:
      return { ...state, similarMoviesList: action.payload };

    case GET_TV_DETAIL:
      return { ...state, tvDetail: action.payload };

    case GET_SIMILAR_TV:
      return { ...state, similarTVList: action.payload };

    default:
      return { ...state };
  }
};
