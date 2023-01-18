import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = ({ onHandlePrevPage, onHandleNextPage, page }) => {
  const handlePrevPage = () => {
    onHandlePrevPage();
  };
  const handleNextPage = () => {
    onHandleNextPage();
  };

  return (
    <>
      <div className="panigation text text-small">
        <span className="panigation-left" onClick={handlePrevPage}>
          <SlArrowLeft className="panigation-left-arrow" />
          Prev
        </span>

        <span className="panigation-text">{page}</span>
        <span className="panigation-right" onClick={handleNextPage}>
          Next
          <SlArrowRight className="panigation-right-arrow" />
        </span>
      </div>
    </>
  );
};

export default Pagination;
