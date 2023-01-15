import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Movies = () => {
  return (
    <div className="movies">
      <div className="movies-background">
        <img
          src={require("../../assets/poster-background.png")}
          alt="poster-background"
          className="movies-background-image"
        />
        <div className="movies-background-bottom"></div>
      </div>
      <div className="movies-content">
        <div className="movies-content-wrapper">
          <h2 className="movies-content-heading text text-normal">Movies</h2>
          <div className="movies-content-search">
            <input
              type="text"
              className="movies-content-search-input"
              placeholder="Search your interesting..."
            />
            <HiOutlineSearch className="movies-content-search-icon"></HiOutlineSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
