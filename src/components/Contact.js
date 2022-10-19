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
          {/* <p className='container text-center mt-5 dev-heading'>Reach out to us for any enquiry</p> */}
          <p className='container text-center mt-5 head'>Google Developers Group, Siliguri</p>
          <p className='container text-center head-1'> Of the Developers, By the Developers, For the Developers</p>
          <br />
          <p className='container text-center head-1'>Google Developer Group Siliguri is a Siliguri community-run meetup for developers interested in resources and technology from Google Developers. We try to engage student developers, fresh graduates and professionals through our hack events & meetups.
          </p>
          <br />
          <p className='container text-center head-1'>
            The motive is to create a local ecosystem of programmers & hackers in and around Siliguri. The technology awareness is main goal for first few years of the group. To put it in a nutshell, we are a community that organises tech talks, workshops, bootcamps, Google flagship events where programmers meet to discuss and work with several Google developer resources and products.
          </p>
          <br />
          <div className='container text-center'>
            <a href='https://www.linkedin.com/company/gdg-siliguri/' className='btns text-center btnLink' target="_blank">Contact us</a>
          </div>
          <br />
          <p className='container text-center head-2'>Questions? please email us</p>
        </div>
        <div>
          <img src={monuments} className="monuments-img"></img>
          <Footer />
        </div>
      </div>
    </div>
  )
}
