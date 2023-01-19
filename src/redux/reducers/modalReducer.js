import { CLOSE_MODAL_SEASONS, SHOW_MODAL_SEASONS } from "../types";

const initialState = {
  showModalSeasons: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_SEASONS:
      return { ...state, showModalSeasons: true };

    case CLOSE_MODAL_SEASONS:
      return { ...state, showModalSeasons: false };

    default:
      return { ...state };
  }
};
