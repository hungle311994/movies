import React from "react";
import ReactPlayer from "react-player";

const Trailer = ({ videos }) => {
  return (
    <div className="item-content-detail-trailer">
      <h3 className="item-content-detail-heading">Trailer</h3>
      <div className="item-content-detail-reactPlayerWrapper">
        <ReactPlayer
          url={
            videos &&
            videos[0] &&
            `https://www.youtube.com/watch?v=${videos[0].key}`
          }
          playing={false}
          width="100%"
          height="100%"
          volume={1}
          className="item-content-detail-reactPlayer"
        />
      </div>
    </div>
  );
};

export default Trailer;
