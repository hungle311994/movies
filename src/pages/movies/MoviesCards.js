/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const MoviesCards = ({ list, onHandleMovies, onHandlePageClick }) => {
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
                <img
                  src={
                    item.poster_path !== null && item.poster_path !== undefined
                      ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                      : require("../../assets/PictureNotAvailable.png")
                  }
                  alt="poster"
                  className="cards-item-image"
                />
                <span className="cards-item-title">
                  {item.title || item.name}
                </span>
                <span className="cards-item-rating">
                  <HiStar style={{ fontSize: "16px" }} />
                  <span>{Math.floor(item.vote_average * 10) / 10}</span>
                </span>
              </Link>
            ))}
        </div>
        <Pagination onHandlePageClick={onHandlePageClick} />
      </div>
    </div>
  );
};

export default MoviesCards;
