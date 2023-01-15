import React from "react";
import { FaPlay } from "react-icons/fa";
import { TbArrowNarrowRight } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trending = () => {
  const state = useSelector((state) => state);
  const trendingList = state.trendingRedux.trendingList;
  return (
    <div className="trending">
      <div className="trending-container">
        <div className="trending-heading">
          <h3 className="trending-title text-normal">Trending Movies</h3>
          <Link className="trending-view text-small" to="/movies">
            <span className="trending-view-detail">View more</span>
            <TbArrowNarrowRight className="trending-view-arrow" />
          </Link>
        </div>
        <div
          className="trending-items"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${trendingList.length},200px)`,
            gap: "10px",
          }}
        >
          {trendingList.length > 0 &&
            trendingList.map((item, idx) => (
              <div className="trending-item" key={item.id}>
                <span className="trending-item-icon">
                  <FaPlay className="trending-item-iconplay" />
                </span>
                <div className="trending-item-detail">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="poster"
                    className="trending-item-image"
                  />
                  <span className="trending-item-title">
                    {item.title || item.name}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
