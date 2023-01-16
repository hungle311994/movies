import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesItem from "../components/contents/MoviesItem";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import TVSeries from "../pages/tv-series/TV-Series";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-series" element={<TVSeries />} />
    <Route path="/:id" element={<MoviesItem />} />
  </Routes>
);
