import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import TVSeries from "../pages/tv-series/TV-Series";
import Search from "../components/search/Search";
import MoviesItem from "../components/contents/MoviesItem";
import TvItem from "../components/contents/TvItem";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-series" element={<TVSeries />} />
    <Route path="/movies/:id" element={<MoviesItem />} />
    <Route path="/tv-series/:id" element={<TvItem />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);
