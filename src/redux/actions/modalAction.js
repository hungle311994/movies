import { CLOSE_MODAL_SEASONS, SHOW_MODAL_SEASONS } from "../types";

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
