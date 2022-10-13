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
          <p className='container text-center mt-5 dev-heading'>Reach out to us for any enquiry</p>
        </div>
        <div>
          <img src={monuments} className="monuments-img"></img>

          <Footer />
        </div>
      </div>
    </div>
  )
}
