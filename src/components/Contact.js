import React from 'react'
import Navbar from "../components/NavBar";
import Footer from './Footer';
import "../stylesheet/Hero.css"
import monuments from "../assets/images/monuments.png"
export default function Contact() {
  return (
    <div>
        <Navbar active="contact"/>
            <img src={monuments} className="monuments-img"></img>
            <Footer/>
    </div>
  )
}
