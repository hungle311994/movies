import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import TVSeries from "../pages/tv-series/TV-Series";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tv-series" element={<TVSeries />} />
  </Routes>
);
