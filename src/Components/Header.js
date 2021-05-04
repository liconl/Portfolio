import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/Info";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import MouseControls from "../Images/mouse_controls.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div
          className="logo"
          onClick={() => {
            window.location.reload();
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="header_link">
              <div>Luis Angel Licon </div>
              <div className="header_description">a self taught programmer</div>
            </div>
          </Link>
        </div>

        <div className="header_links">
          <div>
            <Link to="/about">
              <InfoIcon
                style={{ fontSize: "40px", marginTop: -3.5, fill: "black" }}
              />
            </Link>
          </div>

          <div
            onClick={() => {
              window.open(" https://github.com/liconl");
            }}
          >
            <GitHubIcon fontSize={"large"} />
          </div>
          <div
            onClick={() => {
              window.open(
                " https://www.linkedin.com/in/luis-angel-licon-151b8019b/"
              );
            }}
          >
            <LinkedInIcon fontSize={"large"} />
          </div>
          <div
            onClick={() => {
              window.alert(
                " Feel free to email me at licon.luisangel@gmail.com"
              );
            }}
          >
            <EmailIcon fontSize={"large"} />
          </div>
        </div>
      </header>
      <div className="header_controls">
        <img
          src={MouseControls}
          alt="mouse_controls"
          height="200"
          width="500"
          /*           height="200"
          width="500" */
        />
      </div>
    </div>
  );
};

export default Header;
