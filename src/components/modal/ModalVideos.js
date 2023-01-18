import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { actionCloseModalVideos } from "../../redux/actions/modalAction";

const ModalVideos = ({ videos }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const showModalVideos = state.modalRedux.showModalVideos;
  const handleCloseModal = () => {
    dispatch(actionCloseModalVideos());
  };
  useEffect(() => {
    document.addEventListener("mousedown", () =>
      dispatch(actionCloseModalVideos())
    );
    return document.removeEventListener("mousedown", () =>
      dispatch(actionCloseModalVideos())
    );
  }, [dispatch]);
  return (
    <div className={`modal ${showModalVideos ? "active" : "inActive"}`}>
      <div className="modal-content">
        <AiFillCloseCircle
          className="modal-content-closeBtn"
          onClick={handleCloseModal}
        />
        <div className="modal-content-clip">
          {videos && videos[0] ? (
            <ReactPlayer
              url={
                videos &&
                videos[0] &&
                `https://www.youtube.com/watch?v=${videos[0].key}`
              }
              width="100%"
              height="100%"
              controls={true}
              volume={1}
              muted
            />
          ) : (
            <img
              src={require("../../assets/404-error-back-drop.png")}
              alt="error"
              className="modal-content-clip-error"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalVideos;
