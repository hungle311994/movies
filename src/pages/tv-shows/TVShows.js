import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import TVCards from "./TVCards";
import Search from "../../components/search/Search";
import {
  actionFetchPopularTVListAPI,
  actionGetSimilarTVAPI,
  actionGetTVDetailListAPI,
  actionSearchTVListAPI,
  actionTVCreditsAPI,
  actionTVVideosAPI,
} from "../../redux/actions/tvAction";

const TVShows = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const popularTVList = state.tvRedux.popularTVList;
  const tvSearchList = state.tvRedux.tvSearchList;
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");

  const onHandlePageClick = (e) => {
    setList(popularTVList);
    setSearchList(tvSearchList);
    setPage(e.selected + 1);
  };
  const onHandleTV = (item) => {
    dispatch(actionGetTVDetailListAPI(item.id));
    dispatch(actionGetSimilarTVAPI(item.id));
    dispatch(actionTVVideosAPI(item.id));
    dispatch(actionTVCreditsAPI(item.id));
  };

  useEffect(() => {
    dispatch(actionFetchPopularTVListAPI(page));
    dispatch(actionSearchTVListAPI(searchKeyWords, page));
  }, [dispatch, page, searchKeyWords]);

  return (
    <div className="tv">
      <div className="tv-background">
        <img
          src={require("../../assets/poster-background.png")}
          alt="poster-background"
          className="tv-background-image"
        />
      </div>
      <div className="tv-content">
        <div className="tv-content-wrapper">
          <h2 className="tv-content-heading text text-normal">TV Shows</h2>
          <div className="tv-content-search">
            <input
              type="text"
              className="tv-content-search-input"
              placeholder="Search your interesting..."
              onChange={(e) => setSearchKeyWords(e.target.value)}
              value={searchKeyWords}
            />
            <HiOutlineSearch className="tv-content-search-icon"></HiOutlineSearch>
          </div>
          <div className="tv-content-detail">
            {tvSearchList.length > 0 || searchKeyWords.length > 0 ? (
              <Search
                searchList={searchList ? tvSearchList : searchList}
                searchKeyWords={searchKeyWords}
                path="tv-shows"
                onHandle={onHandleTV}
                onHandlePageClick={onHandlePageClick}
              />
            ) : (
              <TVCards
                list={list ? popularTVList : list}
                onHandleTV={onHandleTV}
                onHandlePageClick={onHandlePageClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
