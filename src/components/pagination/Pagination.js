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
        <SlArrowLeft className="panigation-left" onClick={handlePrevPage} />
        <span className="panigation-text">{page}</span>
        <SlArrowRight className="panigation-right" onClick={handleNextPage} />
      </div>
    </>
  );
};

export default Pagination;
