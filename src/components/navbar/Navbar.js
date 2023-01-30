import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useScrollY } from "../../hooks/useScrollY";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { logOut } from "../../firebase/firebase";

const Navbar = () => {
  const [scrollY] = useScrollY();
  const [activeLogout, setActiveLogout] = useState(false);
  const currrentUser = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
          <span className="navbar-logo-title">The Movies</span>
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
            to="/tv-shows"
            className="navbar-navigate-text text text-medium"
          >
            TV shows
          </NavLink>

          {currrentUser?.email ? (
            <div className="navbar-navigate-user">
              <img
                src={
                  currrentUser.photoURL !== null
                    ? currrentUser.photoURL
                    : "https://source.unsplash.com/random"
                }
                alt="avatar"
                className="navbar-navigate-image"
                onClick={() => setActiveLogout((prev) => !prev)}
              />
              <button
                className={`navbar-navigate-logout ${
                  activeLogout === false ? "inActiveLogout" : "activeLogout"
                }`}
                onClick={handleLogout}
              >
                <AiOutlineLogout />
                Log out
              </button>
            </div>
          ) : (
            <NavLink
              to="/account"
              className="navbar-navigate-account text text-medium"
            >
              <MdAccountCircle className="navbar-navigate-account-icon" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
