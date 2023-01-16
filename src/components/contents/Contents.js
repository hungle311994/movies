import React from "react";
import { useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";

const Contents = () => {
  const state = useSelector((state) => state);
  const trendingMoviesList = state.moviesRedux.trendingMoviesList;
  const topRatedMoviesList = state.moviesRedux.topRatedMoviesList;
  const trendingTVList = state.moviesRedux.trendingTVList;
  const topRatedTVList = state.moviesRedux.topRatedTVList;

  return (
    <>
      <MoviesRow
        moviesList={trendingMoviesList}
        title="Trending Movies"
        path="/movies"
      />
      <MoviesRow
        moviesList={topRatedMoviesList}
        title="Top Rated Movies"
        path="/movies"
      />
      <MoviesRow
        moviesList={trendingTVList}
        title="Trending TV"
        path="/tv-series"
      />
      <MoviesRow
        moviesList={topRatedTVList}
        title="Top Rated TV"
        path="/tv-series"
      />
    </>
  );
};

export default Contents;
