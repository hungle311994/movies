import React from "react";

const PosterRating = ({ detail }) => {
  return (
    <div className="item-content-posterRating">
      <img
        src={
          detail.poster_path !== null
            ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
            : require("../../assets/PictureNotAvailable.png")
        }
        alt="poster_path"
        className="item-content-posterRating-image"
      />
      <div className="item-content-posterRating-item">
        <span className="item-content-posterRating-vote">
          <span className="item-content-posterRating-numVoted">
            {Math.floor(detail.vote_average * 10) / 10}
          </span>
          <span
            className="item-content-posterRating-maxVote"
            style={{
              backgroundImage: `conic-gradient(#09abcc ${Math.floor(
                detail.vote_average * 10
              )}%, #242424 0 ${100 - Math.floor(detail.vote_average * 10)}%)`,
            }}
          ></span>
        </span>
        <div className="item-content-popular">
          <span className="item-content-posterRating-rating">
            {Math.floor(detail.popularity)}
            <span className="item-content-posterRating-rating-text">
              ratings
            </span>
          </span>
          <span className="item-content-posterRating-review">
            {Math.floor(detail.vote_count)}
            <span className="item-content-posterRating-review-text">
              reviews
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PosterRating;
