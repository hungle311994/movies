import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Movies from "../components/movies/Movies";
import MoviesItem from "../components/movies/MoviesItem";
import TVSeries from "../components/tv-series/TVSeries";
import TVItem from "../components/tv-series/TVItem";
import Search from "../components/search/Search";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-series" element={<TVSeries />} />
    <Route path="/movies/:id" element={<MoviesItem />} />
    <Route path="/tv-series/:id" element={<TVItem />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);
