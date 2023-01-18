import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import Error from "../error/Error";
import { useDispatch } from "react-redux";
import {
  actionGetMoviesDetailListAPI,
  actionGetSimilarMoviesAPI,
} from "../../redux/actions/moviesAction";
import {
  actionGetSimilarTVAPI,
  actionGetTVDetailListAPI,
} from "../../redux/actions/tvAction";

const Search = ({
  searchList,
  onHandlePrevPage,
  onHandleNextPage,
  page,
  path,
  searchKeyWords,
}) => {
  const dispatch = useDispatch();
  const handleMovies = (item) => {
    dispatch(actionGetMoviesDetailListAPI(item.id));
    dispatch(actionGetSimilarMoviesAPI(item.id));
    dispatch(actionGetTVDetailListAPI(item.id));
    dispatch(actionGetSimilarTVAPI(item.id));
  };
  return (
    <div className="search">
      <div className="search-container">
        {searchList && searchList.length > 0 ? (
          <>
            <div className="search-items">
              {searchList.length > 0 &&
                searchList.map((item, idx) => (
                  <Link
                    className="search-item"
                    key={item.id}
                    onClick={() => handleMovies(item)}
                    to={`/${path}/${item.id}`}
                  >
                    <span className="search-item-icon">
                      <FaPlay className="search-item-iconplay" />
                    </span>
                    <div className="search-item-detail">
                      <img
                        src={
                          item.poster_path !== null ||
                          item.backdrop_path !== null
                            ? `https://image.tmdb.org/t/p/original/${
                                item.poster_path || item.backdrop_path
                              }`
                            : require("../../assets/PictureNotAvailable.png")
                        }
                        alt="poster"
                        className="search-item-image"
                      />
                      <span className="search-item-title">
                        {item.title || item.name}
                      </span>
                      <span className="search-item-rating">
                        <CiStar style={{ fontSize: "16px" }} />
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
            <Pagination
              onHandlePrevPage={onHandlePrevPage}
              onHandleNextPage={onHandleNextPage}
              page={page}
            />
          </>
        ) : (
          <Error searchKeyWords={searchKeyWords} />
        )}
      </div>
    </div>
  );
};

export default Search;
