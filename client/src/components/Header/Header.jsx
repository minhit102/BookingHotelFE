import "./Header.css";
import React from "react";
import imageLogo from "../../img/image.png";
import imageLogoCv from "../../img/tải xuống.svg";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <a
            className="logo-header"
            href="https://www.youtube.com/watch?v=MpQbwtSiZ7E"
          >
            <img className="image-Logo" src={imageLogoCv} />
          </a>
        </div>
        <div className="header-center">
          <div className="center-find">
            <div className="text-center-left">
              <button className="button-header">
                <span>Anywhere</span>
              </button>
              <div className="ngan-cach"></div>
            </div>
            <div className="text-center-center">
              <button className="button-header">
                <span>Any week</span>
              </button>
              <div className="ngan-cach"></div>
            </div>

            <div className="text-center-right">
              <button className="button-header">
                <span>Add guests </span>
              </button>
              <div className="ngan-cach"></div>
            </div>
            <div className="text-center-button-find">
              <button className="button-header">
                <img
                  className="logo-find"
                  src="https://img.icons8.com/ios/50/search--v1.png"
                  alt="search--v1"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-bnb">
            <div>AirBnb Your Home</div>
            <div>
              <img
                className="logoGlobe"
                src="https://img.icons8.com/material-sharp/24/globe--v1.png"
                alt="globe--v1"
              />
            </div>
          </div>
          <div className="header-right-bnb-1">
            <div className="div-profile">
              <Link to={"login"} className="button-pr">
                <div>
                  <img
                    className="icon-menu"
                    src="https://img.icons8.com/color/48/menu--v1.png"
                    alt="menu--v1"
                  />
                </div>
                <div>
                  <img
                    className="image-avatar"
                    src="https://img.icons8.com/office/50/circled-user-male-skin-type-3.png"
                    alt="circled-user-male-skin-type-3"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
