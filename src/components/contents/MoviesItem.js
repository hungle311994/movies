import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineLink } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Row from "./Row";
import { actionShowModalVideos } from "../../redux/actions/modalAction";

const MoviesItem = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const moviesDetail = state.moviesRedux.moviesDetail;
  const similarMoviesList = state.moviesRedux.similarMoviesList;
  const handleWatchTrailer = () => {
    dispatch(actionShowModalVideos());
  };

  return (
    <div className="item">
      <div className="item-poster">
        <img
          src={
            moviesDetail.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original/${moviesDetail.backdrop_path}`
              : require("../../assets/404-error-back-drop.png")
          }
          alt="backdrop_path"
          className="item-poster-image"
        />
        <div className="item-poster-blur"></div>
      </div>
      <div className="item-content">
        <div className="item-content-imageWrapper">
          <img
            src={
              moviesDetail.poster_path !== null
                ? `https://image.tmdb.org/t/p/original/${moviesDetail.poster_path}`
                : require("../../assets/PictureNotAvailable.png")
            }
            alt="poster_path"
            className="item-content-image"
          />
          <div className="item-content-item">
            <span className="item-content-vote">
              <span className="item-content-numVoted">
                {moviesDetail.vote_average}
              </span>
              <span className="item-content-maxVote">/ 10</span>
            </span>
            <div className="item-content-popular">
              <span className="item-content-rating">
                {moviesDetail.popularity}
                <span className="item-content-rating-text"> ratings</span>
              </span>
              <span className="item-content-review">
                {moviesDetail.vote_count}
                <span className="item-content-review-text"> reviews</span>
              </span>
            </div>
          </div>
        </div>
        <div className="item-content-detail">
          <h2 className="item-content-detail-title">
            {moviesDetail.title || moviesDetail.name}
          </h2>
          <span className="item-content-detail-originalTitle">
            Original title: "{moviesDetail.original_title}"
          </span>
          <div className="item-content-detail-trailer">
            <span
              className="item-content-detail-watch"
              onClick={handleWatchTrailer}
            >
              Watch trailer <CiPlay1 />
            </span>
            <span className="item-content-detail-bookmark">
              <IoBookmarkOutline />
            </span>
            <a
              href={moviesDetail.homepage}
              target="_blank"
              rel="noreferrer"
              className="item-content-detail-link"
            >
              <HiOutlineLink />
            </a>
          </div>
          <div>
            <h3 className="item-content-detail-heading">Description</h3>
            <p className="item-content-detail-overview">
              "{moviesDetail.overview}"
            </p>
            <span className="item-content-detail-tagline">
              "{moviesDetail.tagline}"
            </span>
          </div>
          <div className="item-content-detail-table">
            <h3 className="item-content-detail-heading">Details</h3>

            <table className="item-content-detail-table">
              <tbody className="item-content-detail-tbody">
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Genres</th>
                  <td className="item-content-detail-td">
                    {moviesDetail.genres &&
                      moviesDetail.genres.map((item, idx) => (
                        <span className="item-content-detail-name" key={idx}>
                          {item.name}
                        </span>
                      ))}
                  </td>
                </tr>
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Runtime</th>
                  <td className="item-content-detail-td">
                    {moviesDetail.runtime} min
                  </td>
                </tr>
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Release Date</th>
                  <td className="item-content-detail-td">
                    {moviesDetail.release_date} ( {moviesDetail.status} )
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="item-similar">
        <Row
          list={similarMoviesList}
          title="You might also like"
          path="movies"
        />
      </div>
    </div>
  );
};

export default MoviesItem;
