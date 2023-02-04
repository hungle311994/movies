import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Trailer = ({ videos }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    if (index < videos.length - 1) setIndex(index + 1);
  };
  // console.log(index);

  return (
    <div className="item-content-detail-trailer">
      {videos && videos.length >= 1 ? (
        <>
          <h3 className="item-content-detail-heading">Trailer</h3>
          <div
            className="item-content-detail-playerWrapper"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${videos && videos.length}, 100%)`,
              transform: `translateX(-${index * 708}px)`,
              transition: "all 0.35s linear",
            }}
          >
            {videos &&
              videos.length >= 1 &&
              videos.map((item, idx) => (
                <iframe
                  key={idx}
                  title={item.name}
                  className="item-content-detail-player"
                  src={`https://www.youtube.com/embed/${item.key}`}
                />
              ))}
          </div>
        </>
      ) : (
        ""
      )}

      {videos.length > 1 && (
        <>
          <GrPrevious
            className="item-content-detail-prev"
            style={index === 0 ? { cursor: "not-allowed" } : ""}
            onClick={handlePrev}
          />
          <GrNext
            className="item-content-detail-next"
            style={index === videos.length - 1 ? { cursor: "not-allowed" } : ""}
            onClick={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default Trailer;
