import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import MoviesItem from "../pages/movies/MoviesItem";
import TVShows from "../pages/tv-shows/TVShows";
import TVItem from "../pages/tv-shows/TVItem";
import Account from "../pages/account/Account";
import Search from "../components/search/Search";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-shows" element={<TVShows />} />
    <Route path="/account" element={<Account />} />
    <Route path="/movies/:id" element={<MoviesItem />} />
    <Route path="/tv-shows/:id" element={<TVItem />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);
