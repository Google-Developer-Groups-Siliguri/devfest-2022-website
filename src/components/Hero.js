import React from 'react'
import css from "../stylesheet/Hero.css"
import global_css from "../stylesheet/Global.css"
import logo from "../assets/images/logo.png"
import monuments from "../assets/images/monuments.png"
import Countdown from "../components/Countdown/Countdown"
import { BsCalendarCheck } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <div>
        <div className="hero">
            <div className="container">
                <div className="row align-items-center pt-1">
                <div className="col-lg-7 col-12">
                    <img src={logo} className="logo" alt="" />
                    <p className="lead">Google Developer Groups is back with DevFest in your own town Siliguri, GDG Siiguri is organising this event in Siliguri, Do register and lets meet at the Devfest!</p>
                    <p className="lead-2"><BsCalendarCheck/> 5th &amp; 6th November</p>
                    <p className="lead-2"><MdLocationPin/>  Siliguri Institute of Technology</p>
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-df btn-lg px-4 me-md-2">Register</button>
                    </div>
                </div>
                <div className="col-lg-5 col-12">
                    <Countdown/>
                </div>
                </div>
            </div>
        </div>
         <img src={monuments} className="monuments-img"></img>
    </div>
  )
}
