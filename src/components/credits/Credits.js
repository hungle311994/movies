import React from "react";

const Credits = ({ detail, credits }) => {
  return (
    <div className="item-content-detail-credits">
      <h3 className="item-content-detail-credits-heading">Cast</h3>
      <div className="item-content-detail-credits-view">
        {detail &&
          credits &&
          credits.map((item, idx) => (
            <div className="item-content-detail-credits-view-item" key={idx}>
              <img
                src={
                  item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : require("../../assets/PictureNotAvailable.png")
                }
                alt="profile_path"
                className="item-content-detail-credits-view-image"
              />
              <span className="item-content-detail-credits-view-name">
                {item.name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Credits;
