import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MoviesItem = () => {
  const state = useSelector((state) => state);
  const moviesDetail = state.moviesRedux.moviesDetail;
  const param = useParams();
  const paramId = param.id;
  return (
    <>
      {moviesDetail.length > 0 &&
        moviesDetail.map((item) => {
          if (item.id === paramId) {
            return <span key={item.id}>{item.id}</span>;
          }
          return true;
        })}
    </>
  );
};

export default MoviesItem;
