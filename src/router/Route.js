import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import MoviesItem from "../pages/movies/MoviesItem";
import TVSeries from "../pages/tv-series/TVSeries";
import TVItem from "../pages/tv-series/TVItem";
import Account from "../pages/account/Account";
import Search from "../components/search/Search";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-series" element={<TVSeries />} />
    <Route path="/account" element={<Account />} />
    <Route path="/movies/:id" element={<MoviesItem />} />
    <Route path="/tv-series/:id" element={<TVItem />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);
