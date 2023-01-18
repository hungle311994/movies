import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import TVCards from "../../components/contents/TVCards";
import Search from "../../components/search/Search";
import {
  actionFetchPopularTVListAPI,
  actionSearchTVListAPI,
} from "../../redux/actions/moviesAction";

const TVSeries = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const popularTVList = state.moviesRedux.popularTVList;
  const tvSearchList = state.moviesRedux.tvSearchList;
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const onHandlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setList(popularTVList);
      setSearchList(tvSearchList);
    }
  };
  const onHandleNextPage = () => {
    if (page < 500) {
      setPage(page + 1);
      setList(popularTVList);
      setSearchList(tvSearchList);
    }
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
        <div className="tv-background-bottom"></div>
      </div>
      <div className="tv-content">
        <div className="tv-content-wrapper">
          <h2 className="tv-content-heading text text-normal">TV Series</h2>
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
                page={page}
                onHandlePrevPage={onHandlePrevPage}
                onHandleNextPage={onHandleNextPage}
                searchKeyWords={searchKeyWords}
                path="tv-series"
              />
            ) : (
              <TVCards
                list={list ? popularTVList : list}
                onHandlePrevPage={onHandlePrevPage}
                onHandleNextPage={onHandleNextPage}
                page={page}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVSeries;
