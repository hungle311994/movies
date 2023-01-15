import React from "react";
import { NavLink } from "react-router-dom";
import { useScrollY } from "../../hooks/useScrollY";

const Navbar = () => {
  const [scrollY] = useScrollY();
  return (
    <div
      className="navbar"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent", height: "120px" }
          : { backgroundColor: "#0b0b0b", height: "80px" }
      }
    >
      <div className="navbar-container">
        <NavLink className="navbar-logo text text-big" to="/">
          <img
            className="navbar-logo-image"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
          The Movies
        </NavLink>
        <div className="navbar-navigate">
          <NavLink to="/" className="navbar-navigate-text text text-medium">
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="navbar-navigate-text text text-medium"
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-series"
            className="navbar-navigate-text text text-medium"
          >
            TV Series
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
