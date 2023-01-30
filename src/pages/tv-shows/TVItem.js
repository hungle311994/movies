import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import { useSelector } from "react-redux";
import Row from "../../components/row/Row";
import { ToastContainer, toast } from "react-toastify";
import Reviews from "../../components/reviews/Reviews";
import Trailer from "../../components/trailer/Trailer";
import Credits from "../../components/credits/Credits";
import TableDetail from "../../components/table-detail-desc/TableDetail";
import Seasons from "../../components/seasons/Seasons";
import PosterRating from "../../components/poster-rating/PosterRating";

const TVItem = () => {
  const state = useSelector((state) => state);
  const tvDetail = state.tvRedux.tvDetail;
  const similarTVList = state.tvRedux.similarTVList;
  const tvCredits = state.tvRedux.tvCredits;
  const tvVideos = state.tvRedux.tvVideos;
  const [like, setLike] = useState(false);

  const handleLike = () => {
    toast.success("Add to wishlist !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setLike(true);
  };
  const handleUnLike = () => {
    toast.error("Remove from wishlist !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setLike(false);
  };
  return (
    <div className="item">
      <div className="item-poster">
        <img
          src={
            tvDetail.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original${tvDetail.backdrop_path}`
              : `https://image.tmdb.org/t/p/original${tvDetail.poster_path}`
          }
          alt="backdrop_path"
          className="item-poster-image"
        />
        <div className="item-poster-blur"></div>
      </div>
      <div className="item-content">
        <PosterRating detail={tvDetail} />
        <div className="item-content-detail">
          <h2 className="item-content-detail-title">
            {tvDetail.title || tvDetail.name}
          </h2>
          <span className="item-content-detail-originalTitle">
            Original title: "{tvDetail.original_title || tvDetail.original_name}
            "
          </span>
          <div className="item-content-detail-btn">
            {!like ? (
              <>
                <span
                  className="item-content-detail-bookmark"
                  onClick={handleLike}
                >
                  <AiOutlineHeart />
                </span>
                <ToastContainer />
              </>
            ) : (
              <>
                <span
                  className="item-content-detail-bookmark"
                  onClick={handleUnLike}
                >
                  <AiFillHeart />
                </span>
                <ToastContainer />
              </>
            )}

            <a
              href={tvDetail.homepage}
              target="_blank"
              rel="noreferrer"
              className="item-content-detail-link"
            >
              <HiOutlineLink />
            </a>
          </div>
          <div className="">
            <h3 className="item-content-detail-heading">Description</h3>
            <p className="item-content-detail-overview">
              "{tvDetail.overview}"
            </p>
            <span className="item-content-detail-tagline">
              "{tvDetail.tagline}"
            </span>
          </div>
          <TableDetail detail={tvDetail} />
          <Credits detail={tvCredits} credits={tvCredits} />
          <Seasons detail={tvDetail} />
          <Trailer videos={tvVideos} />
        </div>
      </div>
      <Reviews detail={tvDetail} />
      <Row
        list={similarTVList}
        title="You might also like"
        path="tv-shows"
        className="item-similar"
      />
    </div>
  );
};

export default TVItem;
