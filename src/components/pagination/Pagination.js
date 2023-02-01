import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ onHandlePageClick }) => {
  const handlePageClick = (e) => {
    onHandlePageClick(e);
  };

  return (
    <ReactPaginate
      pageCount={500}
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Prev"
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="panigation"
      previousClassName="panigation-item"
      nextClassName="panigation-item"
      pageClassName="panigation-item"
      breakClassName="panigation-item"
      activeClassName="panigation-active"
    />
  );
};

export default Pagination;
