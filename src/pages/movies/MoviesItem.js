import React, { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import { useSelector } from "react-redux";
import Row from "../../components/row/Row";
import { ToastContainer, toast } from "react-toastify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Reviews from "../../components/reviews/Reviews";
import Trailer from "../../components/trailer/Trailer";
import Credits from "../../components/credits/Credits";
import TableDetail from "../../components/table-detail-desc/TableDetail";
import PosterRating from "../../components/poster-rating/PosterRating";

const MoviesItem = () => {
  const state = useSelector((state) => state);
  const moviesDetail = state.moviesRedux.moviesDetail;
  const similarMoviesList = state.moviesRedux.similarMoviesList;
  const moviesCredits = state.moviesRedux.moviesCredits;
  const moviesVideos = state.moviesRedux.moviesVideos;
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
            moviesDetail.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original${moviesDetail.backdrop_path}`
              : `https://image.tmdb.org/t/p/original${moviesDetail.poster_path}`
          }
          alt="backdrop_path"
          className="item-poster-image"
        />
      </div>

      <div className="item-content">
        <PosterRating detail={moviesDetail} />
        <div className="item-content-detail">
          <h2 className="item-content-detail-title">
            {moviesDetail.title || moviesDetail.name}
          </h2>
          <span className="item-content-detail-originalTitle">
            Original title: "{moviesDetail.original_title}"
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
              href={moviesDetail.homepage}
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
              "{moviesDetail.overview}"
            </p>
            <span className="item-content-detail-tagline">
              "{moviesDetail.tagline}"
            </span>
          </div>

          <TableDetail detail={moviesDetail} />
          <Credits detail={moviesCredits} credits={moviesCredits} />
          <Trailer videos={moviesVideos} />
        </div>
      </div>

      <Reviews detail={moviesDetail} />

      {similarMoviesList && similarMoviesList.length >= 1 && (
        <Row
          list={similarMoviesList}
          title="You might also like"
          path="movies"
          className="item-similar"
        />
      )}
    </div>
  );
};

export default MoviesItem;
