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
            {detail.vote_average}
          </span>
          <span className="item-content-posterRating-maxVote">/ 10</span>
        </span>
        <div className="item-content-popular">
          <span className="item-content-posterRating-rating">
            {detail.popularity}
            <span className="item-content-posterRating-rating-text">
              ratings
            </span>
          </span>
          <span className="item-content-posterRating-review">
            {detail.vote_count}
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
