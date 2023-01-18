import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineLink } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Row from "./Row";
import {
  actionShowModalSeasons,
  actionShowModalVideos,
} from "../../redux/actions/modalAction";
import { actionSetSeasonsTV } from "../../redux/actions/tvAction";

const TvItem = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const tvDetail = state.tvRedux.tvDetail;
  const similarTVList = state.tvRedux.similarTVList;
  const handleWatchTrailer = () => {
    dispatch(actionShowModalVideos());
  };
  const handleShowModalSeasons = (item) => {
    dispatch(actionShowModalSeasons());
    dispatch(actionSetSeasonsTV(item));
  };
  return (
    <div className="item">
      <div className="item-poster">
        <img
          src={
            tvDetail.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original/${tvDetail.backdrop_path}`
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
              tvDetail.poster_path !== null
                ? `https://image.tmdb.org/t/p/original/${tvDetail.poster_path}`
                : require("../../assets/PictureNotAvailable.png")
            }
            alt="poster_path"
            className="item-content-image"
          />
          <div className="item-content-item">
            <span className="item-content-vote">
              <span className="item-content-numVoted">
                {tvDetail.vote_average}
              </span>
              <span className="item-content-maxVote">/ 10</span>
            </span>
            <div className="item-content-popular">
              <span className="item-content-rating">
                {tvDetail.popularity}
                <span className="item-content-rating-text"> ratings</span>
              </span>
              <span className="item-content-review">
                {tvDetail.vote_count}
                <span className="item-content-review-text"> reviews</span>
              </span>
            </div>
          </div>
        </div>
        <div className="item-content-detail">
          <h2 className="item-content-detail-title">
            {tvDetail.title || tvDetail.name}
          </h2>
          <span className="item-content-detail-originalTitle">
            Original title: "{tvDetail.original_title || tvDetail.original_name}
            "
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
              href={tvDetail.homepage}
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
              "{tvDetail.overview}"
            </p>
            <span className="item-content-detail-tagline">
              "{tvDetail.tagline}"
            </span>
          </div>
          <div className="item-content-detail-table">
            <h3 className="item-content-detail-heading">Details</h3>

            <table className="item-content-detail-table">
              <tbody className="item-content-detail-tbody">
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Genres</th>
                  <td className="item-content-detail-td">
                    {tvDetail.genres &&
                      tvDetail.genres.map((item, idx) => (
                        <span className="item-content-detail-name" key={idx}>
                          {item.name}
                        </span>
                      ))}
                  </td>
                </tr>
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Episodes</th>
                  <td className="item-content-detail-td">
                    {tvDetail.number_of_episodes}
                  </td>
                </tr>
                <tr className="item-content-detail-tr">
                  <th className="item-content-detail-th">Release Date</th>
                  <td className="item-content-detail-td">
                    {tvDetail.release_date} ( {tvDetail.status} )
                  </td>
                </tr>
              </tbody>
            </table>

            {tvDetail.created_by ? (
              <div className="item-content-detail-createdBy">
                <h3 className="item-content-detail-createdBy-heading">
                  Created By
                </h3>
                <div className="item-content-detail-createdBy-view">
                  {tvDetail &&
                    tvDetail.created_by &&
                    tvDetail.created_by.map((item, idx) => (
                      <div
                        className="item-content-detail-createdBy-view-item"
                        key={idx}
                      >
                        <img
                          src={
                            item.profile_path !== null
                              ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                              : require("../../assets/PictureNotAvailable.png")
                          }
                          alt="profile_path"
                          className="item-content-detail-createdBy-view-image"
                        />
                        <span className="item-content-detail-createdBy-view-name">
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              ""
            )}

            {tvDetail.seasons ? (
              <div className="item-content-detail-seasons">
                <h3 className="item-content-detail-seasons-heading">Seasons</h3>
                <div className="item-content-detail-seasons-view">
                  {tvDetail &&
                    tvDetail.seasons &&
                    tvDetail.seasons.map((item) => (
                      <div
                        className="item-content-detail-seasons-item"
                        key={item.id}
                        onClick={() => handleShowModalSeasons(item)}
                      >
                        <img
                          src={
                            item.poster_path !== null
                              ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                              : require("../../assets/PictureNotAvailable.png")
                          }
                          alt="poster_path"
                          className="item-content-detail-seasons-image"
                        />
                        <span className="item-content-detail-seasons-title">
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="item-similar">
        <Row
          list={similarTVList}
          title="You might also like"
          path="tv-series"
        />
      </div>
    </div>
  );
};

export default TvItem;
