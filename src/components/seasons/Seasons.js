import React from "react";
import { useDispatch } from "react-redux";
import { actionShowModalSeasons } from "../../redux/actions/modalAction";
import { actionSetSeasonsTV } from "../../redux/actions/tvAction";

const Seasons = ({ detail }) => {
  const dispatch = useDispatch();
  const handleShowModalSeasons = (item) => {
    dispatch(actionShowModalSeasons());
    dispatch(actionSetSeasonsTV(item));
  };
  return (
    <div className="item-content-detail-seasons">
      <h3 className="item-content-detail-seasons-heading">Seasons</h3>
      <div className="item-content-detail-seasons-view">
        {detail &&
          detail.seasons &&
          detail.seasons.map((item) => (
            <div
              className="item-content-detail-seasons-item"
              key={item.id}
              onClick={() => handleShowModalSeasons(item)}
            >
              <img
                src={
                  item.poster_path !== null
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : require("../../assets/PictureNotAvailable.png")
                }
                alt="poster_path"
                className="item-content-detail-seasons-image"
              />
              <span className="item-content-detail-seasons-title">
                {item.name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Seasons;
