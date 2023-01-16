import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import MoviesCards from "../../components/contents/MoviesCards";
import { actionFetchPopularTVListAPI } from "../../redux/actions/moviesAction";

const TVSeries = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const popularTVList = state.moviesRedux.popularTVList;
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const onHandlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setMoviesList(popularTVList);
    }
  };
  const onHandleNextPage = () => {
    if (page < 500) {
      setPage(page + 1);
      setMoviesList(popularTVList);
    }
  };
  useEffect(() => {
    dispatch(actionFetchPopularTVListAPI(page));
  }, [dispatch, page]);
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
          <div className="tv-content-detail">
            <MoviesCards
              moviesList={moviesList ? popularTVList : moviesList}
              onHandlePrevPage={onHandlePrevPage}
              onHandleNextPage={onHandleNextPage}
              page={page}
              path="tv-series"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVSeries;
