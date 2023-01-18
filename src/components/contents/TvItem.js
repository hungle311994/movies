import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineLink } from "react-icons/hi";
import { useSelector } from "react-redux";
import Row from "./Row";

const TvItem = () => {
  const state = useSelector((state) => state);
  const tvDetail = state.moviesRedux.tvDetail;
  const similarTVList = state.moviesRedux.similarTVList;
  const handleWatchTrailer = () => {
    console.log("Click");
  };

  return (
    <div className="item">
      <div className="item-poster">
        <img
          src={`https://image.tmdb.org/t/p/original/${tvDetail.backdrop_path}`}
          alt="backdrop_path"
          className="item-poster-image"
        />
        <div className="item-poster-blur"></div>
      </div>
      <div className="item-content">
        <div className="item-content-imageWrapper">
          <img
            src={`https://image.tmdb.org/t/p/original/${tvDetail.poster_path}`}
            alt="poster_path"
            className="item-content-image"
          />
          <div className="item-content-item">
            <span className="item-content-vote">
              {Math.ceil(tvDetail.vote_average)}
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
            Original title: "{tvDetail.original_title}"
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
            <p className="item-content-detail-overview">{tvDetail.overview}</p>
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
                  <th className="item-content-detail-th">Runtime</th>
                  <td className="item-content-detail-td">
                    {tvDetail.runtime} min
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
