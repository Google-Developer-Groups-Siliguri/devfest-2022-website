import React from "react";
import "../stylesheet/Footer.css";
import logo from "../assets/images/devfestlogo_small.webp";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div id="footer" className="footer-container">
      <div className="subfooter-container">
        <p className="text">Stay Tuned for More !</p>
        <h3>Follow #DevFestSiliguri for updates,</h3>
        <h3>recaps, and news.</h3>
        <div className="subfooter-social-icons">
          <BsTwitter /> <BsLinkedin /> <FiInstagram /> <BsFacebook /> <BsLinkedin />
        </div>
      </div>
      <div className="main-footer">
        <img className="footer-logo" src={logo} alt="" />
        <div className="main-footer-bottom">
          <p>
            Reach out to us at:{" "}
            <a href="mailto:gdgsiliguri@gmail.com">
              {" "}
              gdgsiliguri@gmail.com
            </a>
          </p>
          <a style={{ textDecoration: "none" }} href="">
            <p>Community Guidelines</p>
          </a>
          <div className="main-footer-socials">
            <p>Follow us on</p>
            <BsTwitter /> <BsLinkedin /> <FiInstagram /> <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
