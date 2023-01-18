import {
  CLOSE_MODAL_SEASONS,
  CLOSE_MODAL_VIDEOS,
  SHOW_MODAL_SEASONS,
  SHOW_MODAL_VIDEOS,
} from "../types";

const initialState = {
  showModalSeasons: false,
  showModalVideos: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_SEASONS:
      return { ...state, showModalSeasons: true };

    case CLOSE_MODAL_SEASONS:
      return { ...state, showModalSeasons: false };

    case SHOW_MODAL_VIDEOS:
      return { ...state, showModalVideos: true };

    case CLOSE_MODAL_VIDEOS:
      return { ...state, showModalVideos: false };

    default:
      return { ...state };
  }
};
