import React from "react";
import { FaPlay } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionSetMoviesDetail } from "../../redux/actions/moviesAction";

const MoviesRow = ({ moviesList, title, path }) => {
  const dispatch = useDispatch();
  const handleMovies = (item) => {
    dispatch(actionSetMoviesDetail(item));
  };
  return (
    <div className="moviesRow">
      <div className="moviesRow-container">
        <div className="moviesRow-heading">
          <h3 className="moviesRow-title text-normal">{title}</h3>
          <Link className="moviesRow-view text-small" to={path}>
            <span className="moviesRow-view-detail">View more</span>
            <TbArrowNarrowRight className="moviesRow-view-arrow" />
          </Link>
        </div>
        <div
          className="moviesRow-items"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${moviesList.length},200px)`,
            gap: "10px",
          }}
        >
          {moviesList.length > 0 &&
            moviesList.map((item, idx) => (
              <Link
                className="moviesRow-item"
                key={item.id}
                onClick={() => handleMovies(item)}
                to={`/${path}/${item.id}`}
              >
                <span className="moviesRow-item-icon">
                  <FaPlay className="moviesRow-item-iconplay" />
                </span>
                <div className="moviesRow-item-detail">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="poster"
                    className="moviesRow-item-image"
                  />
                  <span className="moviesRow-item-title">
                    {item.title || item.name}
                  </span>
                  <span className="moviesRow-item-rating">
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

export default MoviesRow;
