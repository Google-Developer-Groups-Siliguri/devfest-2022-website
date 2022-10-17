import React from "react";
import "../stylesheet/Footer.css";
import logo from "../assets/images/devfestlogo_small.webp";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer2() {
    return (
        <div id="footer" className="footer-container">
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
                        <a href="https://twitter.com/GDGSiliguri"><BsTwitter /> </a>
                        <a href="https://www.linkedin.com/company/gdg-siliguri/"><BsLinkedin /> </a>
                        <a href="https://www.instagram.com/gdgsiliguri/"><FiInstagram /> </a>
                        <a href="https://www.facebook.com/GDGSiliguri"><BsFacebook /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
