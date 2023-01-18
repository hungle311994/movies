import React from "react";

const Error = ({ searchKeyWords }) => {
  return (
    <div className="error">
      <div className="error-container">
        <img
          src={require("../../assets/404-error.png")}
          alt="404-error"
          className="error-image"
        />
        <div className="error-heading">
          <h2 className="error-title text text-big">No results found</h2>
          <span className="error-text  text-small">
            We couldn't find what your searched for "
            <span className="error-keyword">{searchKeyWords}</span>
            ".
          </span>
          <span className="error-text text-small">Try searching again.</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
