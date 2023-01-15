import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const TVSeries = () => {
  return (
    <div className="tv">
      <div className="tv-background">
        <img
          src={require("../../assets/poster-background.png")}
          alt="poster-background"
          className="tv-background-image"
        />
        <div className="tv-background-bottom"></div>
      </div>
      <div className="tv-content">
        <div className="tv-content-wrapper">
          <h2 className="tv-content-heading text text-normal">TV Series</h2>
          <div className="tv-content-search">
            <input
              type="text"
              className="tv-content-search-input"
              placeholder="Search your interesting..."
            />
            <HiOutlineSearch className="tv-content-search-icon"></HiOutlineSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVSeries;
