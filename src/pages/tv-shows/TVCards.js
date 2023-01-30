/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const TVCards = ({
  list,
  onHandlePrevPage,
  onHandleNextPage,
  page,
  onHandleTV,
}) => {
  const handleMovies = (item) => {
    onHandleTV(item);
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
                to={`/tv-shows/${item.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt="poster"
                  className="cards-item-image"
                />
                <span className="cards-item-title">
                  {item.title || item.name}
                </span>
                <span className="cards-item-rating">
                  <HiStar style={{ fontSize: "16px" }} />
                  <span>{item.vote_average.toFixed(1)}</span>
                </span>
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

export default TVCards;
