import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

const Contents = () => {
  const state = useSelector((state) => state);
  const trendingMoviesList = state.moviesRedux.trendingMoviesList;
  const topRatedMoviesList = state.moviesRedux.topRatedMoviesList;
  const trendingTVList = state.moviesRedux.trendingTVList;
  const topRatedTVList = state.moviesRedux.topRatedTVList;

  return (
    <>
      <Row list={trendingMoviesList} title="Trending Movies" path="movies" />
      <Row list={topRatedMoviesList} title="Top Rated Movies" path="movies" />
      <Row list={trendingTVList} title="Trending TV" path="tv-series" />
      <Row list={topRatedTVList} title="Top Rated TV" path="tv-series" />
    </>
  );
};

export default Contents;
