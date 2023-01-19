import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCloseCircle } from "react-icons/ai";
import { getDate } from "../../utils/getDate";

const Reviews = ({ detail }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    toast.success("Submit review success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setMessage(message);
  };
  const handleRemoveReview = () => {
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
            onChange={(e) => {
              setMessage(e.target.value);
              console.log(e.target.value);
            }}
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
        <span className="item-reviews-contents-count">Reviews (0)</span>

        <div className="item-reviews-contents-item">
          <div className="item-reviews-contents-item-detail">
            <img
              src="https://images.unsplash.com/photo-1673855945969-5a340b5c0843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="avatar_path"
              className="item-reviews-contents-item-detail-image"
            />
            <div className="item-reviews-contents-item-detail-desc">
              <span className="item-reviews-contents-item-detail-name">
                username
              </span>
              <span className="item-reviews-contents-item-detail-createDate">
                {getDate()}
              </span>
              <span className="item-reviews-contents-item-detail-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                corrupti vel suscipit reiciendis sapiente rerum libero
                architecto delectus sequi dolor, voluptatem officiis laborum ad
                voluptatibus. Ut culpa voluptas necessitatibus laboriosam?
              </span>
            </div>
          </div>
          <AiFillCloseCircle
            className="item-reviews-contents-item-remove"
            onClick={handleRemoveReview}
          />
        </div>

        {/* <span
          style={{
            fontSize: "16px",
            textAlign: "center",
            color: "#818181",
          }}
        >
          Have no reviews
        </span> */}
      </div>
    </div>
  );
};

export default Reviews;
