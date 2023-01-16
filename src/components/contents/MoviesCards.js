/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { useDispatch } from "react-redux";
import { actionSetMoviesDetail } from "../../redux/actions/moviesAction";

const MoviesCards = ({
  moviesList,
  onHandlePrevPage,
  onHandleNextPage,
  page,
  path,
}) => {
  const dispatch = useDispatch();
  const handleMovies = (item) => {
    dispatch(actionSetMoviesDetail(item));
  };
  return (
    <div className="moviesCards">
      <div className="moviesCards-container">
        <div className="moviesCards-items">
          {moviesList.length > 0 &&
            moviesList.map((item, idx) => (
              <Link
                className="moviesCards-item"
                key={item.id}
                onClick={() => handleMovies(item)}
                to={`/${path}/${item.id}`}
              >
                <span className="moviesCards-item-icon">
                  <FaPlay className="moviesCards-item-iconplay" />
                </span>
                <div className="moviesCards-item-detail">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="poster"
                    className="moviesCards-item-image"
                  />
                  <span className="moviesCards-item-title">
                    {item.title || item.name}
                  </span>
                  <span className="moviesCards-item-rating">
                    <CiStar style={{ fontSize: "16px" }} />
                    {item.vote_average.toFixed(1)}
                  </span>
                </div>
              </Link>
            ))}
        </div>
        <Pagination
          onHandlePrevPage={onHandlePrevPage}
          onHandleNextPage={onHandleNextPage}
          page={page}
        />
      </div>
    </div>
  );
};

export default MoviesCards;
