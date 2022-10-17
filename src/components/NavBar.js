import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/devfest-logo.png"
import css from "../stylesheet/Navbar.css"
import { HiMenu } from "react-icons/hi";
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" ><img src={logo} id="navbar-logo" alt="" className="mx-5 my-1 px-3 py-1" /></Link>
                <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <HiMenu className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${props.active === "home" ? "active" : ""}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule" className={`nav-link ${props.active === "schedule" ? "active" : ""}`} >Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tickets" className={`nav-link ${props.active === "tickets" ? "active" : ""}`} >Tickets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/team" className={`nav-link ${props.active==="team"?"active":""}`} >Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${props.active === "contact" ? "active" : ""}`} >Contact us</Link>
                        </li>

                    </ul>
                    {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}
