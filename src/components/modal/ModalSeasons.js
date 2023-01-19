import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { actionCloseModalSeasons } from "../../redux/actions/modalAction";

const ModalSeasons = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const showModalSeasons = state.modalRedux.showModalSeasons;
  const seasonsTVItem = state.tvRedux.seasonsTVItem;

  const handleCloseModal = () => {
    dispatch(actionCloseModalSeasons());
  };

  return (
    <div className={`modal ${showModalSeasons ? "active" : "inActive"}`}>
      <div className="modal-content">
        <AiFillCloseCircle
          className="modal-content-closeBtn"
          onClick={handleCloseModal}
        />
        <div className="modal-content-image">
          <img
            src={
              seasonsTVItem.poster_path !== null
                ? `https://image.tmdb.org/t/p/original/${seasonsTVItem.poster_path}`
                : require("../../assets/PictureNotAvailable.png")
            }
            alt="poster_path"
            className="modal-content-image-item"
          />
        </div>
        <div className="modal-content-detail">
          <h2 className="modal-content-detail-name">{seasonsTVItem.name}</h2>
          <div className="modal-content-detail-desc">
            <span className="modal-content-detail-date">
              {seasonsTVItem.air_date}
            </span>
            <span className="modal-content-detail-eps">
              Episode: {seasonsTVItem.episode_count}
            </span>
          </div>
          <p className="modal-content-detail-overview">
            "
            {seasonsTVItem.overview !== "" ? seasonsTVItem.overview : "Nothing"}
            "
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalSeasons;
