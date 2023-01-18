import {
  CLOSE_MODAL_SEASONS,
  CLOSE_MODAL_VIDEOS,
  SHOW_MODAL_SEASONS,
  SHOW_MODAL_VIDEOS,
} from "../types";

// Modal Seasons
export const actionShowModalSeasons = () => {
  return {
    type: SHOW_MODAL_SEASONS,
  };
};

export const actionCloseModalSeasons = () => {
  return {
    type: CLOSE_MODAL_SEASONS,
  };
};

// Modal Videos
export const actionShowModalVideos = () => {
  return {
    type: SHOW_MODAL_VIDEOS,
  };
};

export const actionCloseModalVideos = () => {
  return {
    type: CLOSE_MODAL_VIDEOS,
  };
};
