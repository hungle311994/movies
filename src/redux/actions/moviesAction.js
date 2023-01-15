import { getTrendingMovies } from "../../api/GetTrendingMovies";
import { GET_TRENDING_MOVIES } from "../types";

export const actionFetchTrendingListAPI = () => {
  return async (dispatch) => {
    const res = await getTrendingMovies();
    dispatch(actionFetchTrendingList(res.data.results));
  };
};

export const actionFetchTrendingList = (trendingListAPI) => {
  return {
    type: GET_TRENDING_MOVIES,
    payload: trendingListAPI,
  };
};
