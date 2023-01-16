import {
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_TV,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV,
  SET_MOVIES_DETAIL,
} from "../types";

const initialState = {
  trendingMoviesList: [],
  topRatedMoviesList: [],
  trendingTVList: [],
  topRatedTVList: [],
  popularMoviesList: [],
  popularTVList: [],
  moviesDetail: [],
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

    case SET_MOVIES_DETAIL:
      return { ...state, moviesDetail: action.payload };

    default:
      return { ...state };
  }
};
