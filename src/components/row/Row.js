import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  actionGetMoviesDetailListAPI,
  actionGetSimilarMoviesAPI,
  actionMoviesCreditsAPI,
  actionMoviesVideosAPI,
} from "../../redux/actions/moviesAction";
import {
  actionGetSimilarTVAPI,
  actionGetTVDetailListAPI,
  actionTVCreditsAPI,
  actionTVVideosAPI,
} from "../../redux/actions/tvAction";

const Row = ({ list, title, path }) => {
  const dispatch = useDispatch();
  const handleMovies = (item) => {
    // Movies
    dispatch(actionGetMoviesDetailListAPI(item.id));
    dispatch(actionGetSimilarMoviesAPI(item.id));
    dispatch(actionMoviesVideosAPI(item.id));
    dispatch(actionMoviesCreditsAPI(item.id));
    // TV
    dispatch(actionGetTVDetailListAPI(item.id));
    dispatch(actionGetSimilarTVAPI(item.id));
    dispatch(actionTVVideosAPI(item.id));
    dispatch(actionTVCreditsAPI(item.id));
  };
  return (
    <div className="row">
      <div className="row-container">
        <div className="row-heading">
          <h3 className="row-title text-normal">{title}</h3>
        </div>
        <div
          className="row-items"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${list && list.length},200px)`,
            gap: "10px",
          }}
        >
          {list &&
            list.length > 0 &&
            list.map((item, idx) => (
              <Link
                className="row-item"
                key={item.id}
                onClick={() => handleMovies(item)}
                to={`/${path}/${item.id}`}
              >
                <span className="row-item-icon">
                  <FaPlay className="row-item-iconplay" />
                </span>
                <div className="row-item-detail">
                  <img
                    src={
                      item.poster_path !== null
                        ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                        : require("../../assets/PictureNotAvailable.png")
                    }
                    alt="poster"
                    className="row-item-image"
                  />
                  <span className="row-item-title">
                    {item.title || item.name}
                  </span>
                  <span className="row-item-rating">
                    <CiStar style={{ fontSize: "16px" }} />
                    {item.vote_average.toFixed(1)}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
