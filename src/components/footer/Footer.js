import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={require("../../assets/poster-footer.png")}
        alt="poster-footer"
        className="footer-image"
      />
      <div className="footer-content">
        <div className="footer-content-wrapper">
          <NavLink className="footer-logo text text-medium" to="/">
            <img
              className="footer-logo-image"
              src={require("../../assets/logo.png")}
              alt="logo"
            />
            The Movies
          </NavLink>

          <ul className="footer-content-ul-level1">
            <li className="footer-content-li-level1">
              <ul className="footer-content-ul-level2">
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">FAQ</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Investor</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Privacy</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Speed Test</Link>
                </li>
              </ul>
            </li>
            <li className="footer-content-li-level1">
              <ul className="footer-content-ul-level2">
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Help Center</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Jobs</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">
                    Cookie Preferences
                  </Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Legal Notices</Link>
                </li>
              </ul>
            </li>
            <li className="footer-content-li-level1">
              <ul className="footer-content-ul-level2">
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Account</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Ways to Watch</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">
                    Corporate Information
                  </Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">
                    Only on The Movies
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer-content-li-level1">
              <ul className="footer-content-ul-level2">
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Media Center</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Terms of Use</Link>
                </li>
                <li className="footer-content-li-level2">
                  <Link className="footer-content-link">Contact Us</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
