import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineLink } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Row from "./Row";
import { actionShowModalSeasons } from "../../redux/actions/modalAction";
import { actionSetSeasonsTV } from "../../redux/actions/tvAction";
import ReactPlayer from "react-player";

const TvItem = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const tvDetail = state.tvRedux.tvDetail;
  const similarTVList = state.tvRedux.similarTVList;
  const tvCredits = state.tvRedux.tvCredits;
  const tvVideos = state.tvRedux.tvVideos;
  const tvReviews = state.tvRedux.tvReviews;
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
          <div className="item-content-detail-btn">
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
          </div>
          {tvCredits && tvCredits[0] ? (
            <div className="item-content-detail-credits">
              <h3 className="item-content-detail-credits-heading">Cast</h3>
              <div className="item-content-detail-credits-view">
                {tvDetail &&
                  tvCredits &&
                  tvCredits.map((item, idx) => (
                    <div
                      className="item-content-detail-credits-view-item"
                      key={idx}
                    >
                      <img
                        src={
                          item.profile_path !== null
                            ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                            : require("../../assets/PictureNotAvailable.png")
                        }
                        alt="profile_path"
                        className="item-content-detail-credits-view-image"
                      />
                      <span className="item-content-detail-credits-view-name">
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
          ) : (
            ""
          )}
          {tvVideos && tvVideos[0] ? (
            <div className="item-content-detail-trailer">
              <h3 className="item-content-detail-heading">Trailer</h3>
              <div className="item-content-detail-reactPlayerWrapper">
                <ReactPlayer
                  url={
                    tvVideos &&
                    tvVideos[0] &&
                    `https://www.youtube.com/watch?v=${tvVideos[0].key}`
                  }
                  playing={false}
                  width="100%"
                  height="100%"
                  volume={1}
                  className="item-content-detail-reactPlayer"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="item-reviews">
        <div className="item-reviews-form">
          <h3 className="item-reviews-form-heading">
            Review "{tvDetail.title || tvDetail.name}"
          </h3>
          <span className="item-reviews-form-desc">
            Write a review for this movie. It will be posted on this page.
          </span>
          <div className="item-reviews-form-rating">
            <label className="item-reviews-form-title">Select Rating</label>
            <select className="item-reviews-form-select">
              <option value="0">--Rating</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="item-reviews-form-message">
            <label className="item-reviews-form-title">Message</label>
            <textarea
              placeholder="Enter your impressive"
              className="item-reviews-form-messageArea"
            />
          </div>
          <button type="button" className="item-reviews-form-btn">
            Submit
          </button>
        </div>
        <div className="item-reviews-contents">
          {tvReviews && tvReviews[0] ? (
            tvReviews.map((item, idx) => (
              <div className="item-reviews-contents-item" key={idx}>
                <div className="item-reviews-contents-item-detail">
                  <img
                    src={
                      item.author_details.avatar_path !== null
                        ? `https://image.tmdb.org/t/p/original/${item.author_details.avatar_path}`
                        : require("../../assets/PictureNotAvailable.png")
                    }
                    alt="avatar_path"
                    className="item-reviews-contents-item-detail-image"
                  />
                  <div className="item-reviews-contents-item-detail-desc">
                    <span className="item-reviews-contents-item-detail-name">
                      {item.author_details.username || item.author_details.name}
                    </span>
                    <span className="item-reviews-contents-item-detail-createDate">
                      {item.created_at.slice(0, 10)}
                    </span>
                    <span className="item-reviews-contents-item-detail-message">
                      {item.content}
                    </span>
                  </div>
                </div>
                <div className="item-reviews-contents-item-rating">
                  {item.author_details.rating !== null ? (
                    <>
                      <span className="item-reviews-contents-item-rating-voted">
                        {item.author_details.rating}
                      </span>
                      <span className="item-reviews-contents-item-rating-maxVote">
                        / 10
                      </span>
                    </>
                  ) : (
                    <span style={{ fontSize: "13px", color: "#818181" }}>
                      "Not voted"
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <span
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "#818181",
              }}
            >
              Have no reviews
            </span>
          )}
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
