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
          <p className='dev-heading'>Book your seat</p>
          <span className='info'>Book your ticket to DevFest’22 at Siliguri Institute of Technology and experience the community like no other.</span>
          <br />

          <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc33RWi0cYkncSjS6TKcXDWoNj_3O-1halpaxc-SW7l2wkFdA/viewform" target="_blank" className="btns btn-secondary" >Get Ticket</a>
          </div>
        </div>
        <br />
        <div className='container'>
          <h2>Points to note 🎯 </h2>
          <ul className='info'>
            <li>Each ticket is valid for ONE admission only. If you are bringing a guest, they’ll need their own ticket.
            </li>
            <li>Tickets are non-refundable.
            </li>
            <li>You have to show your  ticket to the volunteers and make sure your entry.</li>
            <li>You can’t copy  ticket from others because each tickets have their specific QR code.</li>
            <li>Those who will get their tickets only they will attend .</li>
            <li>The ticket is entirely for both the days.</li>
            <li>It’s important to us that everyone who attends Devfest 2022 Siliguri is treated equally, respected, and protected. By attending, you agree to abide by our Terms.</li>
          </ul>
        </div>
        <br />
        <div className='container'>
          <h2>Perks 🚀 </h2>
          <ul className='info'>
            <li>Hands on workshops🎈
            </li>
            <li>Interaction with the community 🙌
            </li>
            <li>Learn, Enjoy and Participate 🏆</li>
            <li>Grow your knowledge 📈</li>
            <li>Learn to optimise your resources 📚</li>
            <li>Exposure your idea 💡</li>
            <li>Test your competence 🎯</li>
          </ul>
        </div>
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  )
}
