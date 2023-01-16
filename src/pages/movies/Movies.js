import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import MoviesCards from "../../components/contents/MoviesCards";
import { actionFetchPopularMoviesListAPI } from "../../redux/actions/moviesAction";

const Movies = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const popularMoviesList = state.moviesRedux.popularMoviesList;
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const onHandlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setMoviesList(popularMoviesList);
    }
  };
  const onHandleNextPage = () => {
    if (page < 500) {
      setPage(page + 1);
      setMoviesList(popularMoviesList);
    }
  };
  useEffect(() => {
    dispatch(actionFetchPopularMoviesListAPI(page));
  }, [dispatch, page]);
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
          <div className="movies-content-detail">
            <MoviesCards
              moviesList={moviesList ? popularMoviesList : moviesList}
              onHandlePrevPage={onHandlePrevPage}
              onHandleNextPage={onHandleNextPage}
              page={page}
              path="movies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
