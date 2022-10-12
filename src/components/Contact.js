import React from 'react'
import Navbar from "../components/NavBar";
import "../stylesheet/Hero.css"
import "../stylesheet/Contact.css"
import monuments from "../assets/images/monuments.png"
import Footer from './Footer';
export default function Contact() {
  return (
    <div>
      <Navbar active="contact" />
      <div className='page'>
        <div className='content'>
          <h1 className='container text-center mt-5'>Reach out to us for any enquiry</h1>
        </div>
        <div>
          <img src={monuments} className="monuments-img"></img>

          <Footer />
        </div>
      </div>
    </div>
  )
}
