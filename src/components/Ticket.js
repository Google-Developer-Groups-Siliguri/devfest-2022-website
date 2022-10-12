import React from 'react'
import "../stylesheet/Ticket.css"
import Navbar from "../components/NavBar";
import Footer2 from './Footer2';
export default function Ticket() {
  return (
    <div className='page'>
      <div className='content'>
        <Navbar active="tickets" />
        <div className='container ticket mt-5'>
          <h1>Book your seat</h1>
          <span className='info'>Book your ticket to DevFest’22 at Siliguri Institute of Technology and experience the community like no other</span>
          <br />
          <button type="button" className="getTicket">Get Ticket</button>
        </div>
        <br />
        <div className='container'>
          <h2>Points to note 🎯 </h2>
          <ul className='info'>
            <li>Each ticket is valid for ONE admission only. If you are bringing a guest, they’ll need their own ticket.
            </li>
            <li>Tickets are non-refundable.
            </li>
            <li>It’s important to us that everyone who attends Cloud Community Days Bhopal is treated equally, respected, and protected. By attending, you agree to abide by our Terms.</li>
          </ul>
        </div>
        <br />
        <div className='container'>
          <h2>Perks 🚀 </h2>
          <ul className='info'>
            <li>Each ticket is valid for ONE admission only. If you are bringing a guest, they’ll need their own ticket.
            </li>
            <li>Tickets are non-refundable.
            </li>
            <li>It’s important to us that everyone who attends Cloud Community Days Bhopal is treated equally, respected, and protected. By attending, you agree to abide by our Terms.</li>
          </ul>
        </div>
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  )
}
