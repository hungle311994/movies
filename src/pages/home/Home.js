import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useScrollY } from "../../hooks/useScrollY";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFetchTrendingMoviesListAPI,
  actionFetchTopRatedMoviesListAPI,
} from "../../redux/actions/moviesAction";
import {
  actionFetchTopRatedTVListAPI,
  actionFetchTrendingTVListAPI,
} from "../../redux/actions/tvAction";
import Row from "../../components/row/Row";

const Home = () => {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY(0);
  const [isMute, setIsMute] = useState(true);
  const state = useSelector((state) => state);
  const trendingMoviesList = state.moviesRedux.trendingMoviesList;
  const topRatedMoviesList = state.moviesRedux.topRatedMoviesList;
  const trendingTVList = state.tvRedux.trendingTVList;
  const topRatedTVList = state.tvRedux.topRatedTVList;
  useEffect(() => {
    // Movies
    dispatch(actionFetchTrendingMoviesListAPI());
    dispatch(actionFetchTopRatedMoviesListAPI());
    // TV
    dispatch(actionFetchTrendingTVListAPI());
    dispatch(actionFetchTopRatedTVListAPI());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="home-video">
        <div className="home-video-heading">
          <h1 className="home-video-tilte text text-big">
            Avatar: The Way of Water IMAX Teaser Trailer
          </h1>
        </div>
        <ReactPlayer
          url="https://vimeo.com/707902934"
          playing={scrollY < 500 ? true : false}
          width="100%"
          height="100%"
          controls={false}
          loop={true}
          volume={1}
          muted={isMute}
          className="home-video-detail"
        />
        {isMute ? (
          <VscMute
            className="home-video-volume"
            onClick={() => setIsMute((prev) => !prev)}
          ></VscMute>
        ) : (
          <VscUnmute
            className="home-video-volume"
            onClick={() => setIsMute((prev) => !prev)}
          ></VscUnmute>
        )}
        <div className="home-video-bottom"></div>
      </div>
      <Row list={trendingMoviesList} title="Trending Movies" path="movies" />
      <Row list={topRatedMoviesList} title="Top Rated Movies" path="movies" />
      <Row list={trendingTVList} title="Trending TV" path="tv-shows" />
      <Row list={topRatedTVList} title="Top Rated TV" path="tv-shows" />
    </div>
  );
};

export default Home;
