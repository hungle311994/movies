import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useScrollY } from "../../hooks/useScrollY";
import Contents from "../../components/contents/Contents";
import { useDispatch } from "react-redux";
import {
  actionFetchTrendingMoviesListAPI,
  actionFetchTopRatedMoviesListAPI,
} from "../../redux/actions/moviesAction";
import {
  actionFetchTopRatedTVListAPI,
  actionFetchTrendingTVListAPI,
} from "../../redux/actions/tvAction";

const Home = () => {
  const [isMute, setIsMute] = useState(true);
  const [scrollY] = useScrollY(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchTrendingMoviesListAPI());
    dispatch(actionFetchTopRatedMoviesListAPI());
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
      <Contents />
    </div>
  );
};

export default Home;
