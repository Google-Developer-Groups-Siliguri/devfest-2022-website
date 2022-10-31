import React from "react";
import "../stylesheet/Footer.css";
import "../stylesheet/Footer2.css";
import logo from "../assets/images/transparent logo.png";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Footer2() {
    return (
        <div id="footer-2" className="footer-container">
            <hr style={{ marginTop: "0px" }} />
            <div className="main-footer">
                <img className="footer-logo" src={logo} alt="" />
                <div className="main-footer-bottom-2 row">
                    <p className="footer-p col-md-4 col-12">
                        Reach out to us at:{" "}
                        <a href="mailto:gdgsiliguri@gmail.com">
                            {" "}
                            gdgsiliguri@gmail.com
                        </a>
                    </p>
                    <a style={{ textDecoration: "none" }} href="https://developers.google.com/community-guidelines" className="footer-a col-md-4 col-12 text-center">
                        <p>Community Guidelines</p>
                    </a>
                    <div className="main-footer-socials col-md-4 col-12 text-end">
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
