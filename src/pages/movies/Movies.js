import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import MoviesCards from "../../components/contents/MoviesCards";
import Search from "../../components/search/Search";
import {
  actionFetchPopularMoviesListAPI,
  actionGetMoviesDetailListAPI,
  actionGetSimilarMoviesAPI,
  actionMoviesCreditsAPI,
  actionMoviesReviewsAPI,
  actionMoviesVideosAPI,
  actionSearchMoviesListAPI,
} from "../../redux/actions/moviesAction";

const Movies = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const popularMoviesList = state.moviesRedux.popularMoviesList;
  const moviesSearchList = state.moviesRedux.moviesSearchList;
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const onHandlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setList(popularMoviesList);
      setSearchList(moviesSearchList);
    }
  };
  const onHandleNextPage = () => {
    if (page < 500) {
      setPage(page + 1);
      setList(popularMoviesList);
      setSearchList(moviesSearchList);
    }
  };
  const onHandleMovies = (item) => {
    dispatch(actionGetMoviesDetailListAPI(item.id));
    dispatch(actionGetSimilarMoviesAPI(item.id));
    dispatch(actionMoviesVideosAPI(item.id));
    dispatch(actionMoviesCreditsAPI(item.id));
    dispatch(actionMoviesReviewsAPI(item.id));
  };
  useEffect(() => {
    dispatch(actionFetchPopularMoviesListAPI(page));
    dispatch(actionSearchMoviesListAPI(searchKeyWords, page));
  }, [dispatch, page, searchKeyWords]);
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
              onChange={(e) => setSearchKeyWords(e.target.value)}
              value={searchKeyWords}
            />
            <HiOutlineSearch className="movies-content-search-icon"></HiOutlineSearch>
          </div>
          <div className="movies-content-detail">
            {moviesSearchList.length > 0 || searchKeyWords.length > 0 ? (
              <Search
                searchList={searchList ? moviesSearchList : searchList}
                page={page}
                onHandlePrevPage={onHandlePrevPage}
                onHandleNextPage={onHandleNextPage}
                searchKeyWords={searchKeyWords}
                path="movies"
                onHandleMovies={onHandleMovies}
              />
            ) : (
              <MoviesCards
                list={list ? popularMoviesList : list}
                onHandlePrevPage={onHandlePrevPage}
                onHandleNextPage={onHandleNextPage}
                page={page}
                onHandleMovies={onHandleMovies}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
