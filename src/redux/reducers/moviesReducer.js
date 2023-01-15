import { GET_TRENDING_MOVIES } from "../types";

const initialState = {
  trendingList: [],
};

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return { ...state, trendingList: action.payload };

    default:
      return { ...state };
  }
};
