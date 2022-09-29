import React from 'react'
import "../stylesheet/Testimonials.css"
import message from "../assets/images/message.png"
import scratch from "../assets/images/scratch.png"

export default function Testimonials() {
  return (
    <div className='testimonials-container'>
        <div className="testimonials-title">
            <img className='message' src={message} alt="" />
            <div className="title">
            <h1>See what our</h1>
            <h1>attendees have to say</h1>
            </div>
            <img className='scratch' src={scratch} alt="" />
        </div>
    </div>
  )
}
