/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const MoviesCards = ({
  list,
  onHandlePrevPage,
  onHandleNextPage,
  page,
  onHandleMovies,
}) => {
  const handleMovies = (item) => {
    onHandleMovies(item);
  };
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-items">
          {list &&
            list.length > 0 &&
            list.map((item, idx) => (
              <Link
                className="cards-item"
                key={item.id}
                onClick={() => handleMovies(item)}
                to={`/movies/${item.id}`}
              >
                <span className="cards-item-icon">
                  <FaPlay className="cards-item-iconplay" />
                </span>
                <div className="cards-item-detail">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="poster"
                    className="cards-item-image"
                  />
                  <span className="cards-item-title">
                    {item.title || item.name}
                  </span>
                  <span className="cards-item-rating">
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
