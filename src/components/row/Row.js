import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  actionGetMoviesDetailListAPI,
  actionGetSimilarMoviesAPI,
  actionMoviesCreditsAPI,
} from "../../redux/actions/moviesAction";
import {
  actionGetSimilarTVAPI,
  actionGetTVDetailListAPI,
  actionTVCreditsAPI,
} from "../../redux/actions/tvAction";
import { HiStar } from "react-icons/hi";

const Row = ({ list, title, path }) => {
  const dispatch = useDispatch();
  const handleMovies = (item) => {
    // Movies
    dispatch(actionGetMoviesDetailListAPI(item.id));
    dispatch(actionGetSimilarMoviesAPI(item.id));
    dispatch(actionMoviesCreditsAPI(item.id));

    // TV
    dispatch(actionGetTVDetailListAPI(item.id));
    dispatch(actionGetSimilarTVAPI(item.id));
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
                <img
                  src={
                    `https://image.tmdb.org/t/p/original${item.poster_path}` ||
                    require("../../assets/PictureNotAvailable.png")
                  }
                  alt="poster"
                  className="row-item-image"
                />
                <span className="row-item-title">
                  {item.title || item.name}
                </span>
                <span className="row-item-rating">
                  <HiStar style={{ fontSize: "16px" }} />
                  <span>{Math.floor(item.vote_average * 10) / 10}</span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
