import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCloseCircle } from "react-icons/ai";
import { getDate } from "../../utils/getDate";
import { AuthContext } from "../../contexts/AuthContext";

const Reviews = ({ detail }) => {
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const reviewList = localStorage.getItem("reviewList")
    ? JSON.parse(localStorage.getItem("reviewList"))
    : [];
  const handleSubmit = () => {
    const review = {
      message: message,
    };
    toast.success("Submit review success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setMessage(message);
    reviewList.push(review);
    localStorage.setItem("reviewList", JSON.stringify(reviewList));
    setMessage("");
  };
  const handleRemoveReview = (mess, idx) => {
    toast.error("Deleted review !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="item-reviews">
      <div className="item-reviews-form">
        <h3 className="item-reviews-form-heading">
          "{detail.title || detail.name}"
        </h3>
        <span className="item-reviews-form-desc">
          Write a review for this movie. It will be posted on this page.
        </span>

        <div className="item-reviews-form-message">
          <label className="item-reviews-form-title">Message</label>
          <textarea
            placeholder="Enter your impressive"
            className="item-reviews-form-messageArea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          type="button"
          className="item-reviews-form-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <ToastContainer />
      </div>

      <div className="item-reviews-contents">
        <span className="item-reviews-contents-count">
          Reviews ({reviewList ? reviewList.length : "0"})
        </span>

        {reviewList && reviewList[0] ? (
          reviewList.map((mess, idx) => (
            <div className="item-reviews-contents-item" key={idx}>
              <div className="item-reviews-contents-item-detail">
                <img
                  src={user?.email && user.photoURL}
                  alt="avatar_path"
                  className="item-reviews-contents-item-detail-image"
                />
                <div className="item-reviews-contents-item-detail-desc">
                  <span className="item-reviews-contents-item-detail-name">
                    {user?.email && user.displayName}
                  </span>
                  <span className="item-reviews-contents-item-detail-createDate">
                    {getDate()}
                  </span>
                  <span className="item-reviews-contents-item-detail-message">
                    {mess.message}
                  </span>
                </div>
              </div>
              <AiFillCloseCircle
                className="item-reviews-contents-item-remove"
                onClick={() => handleRemoveReview(mess, idx)}
              />
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
  );
};

export default Reviews;
