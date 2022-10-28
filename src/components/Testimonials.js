import React from "react";
import "../stylesheet/Testimonials.css";
import message from "../assets/images/message.png";
import scratch from "../assets/images/scratch.png";
import speaker1 from "../assets/images/speaker1.png";

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
        <img className="message" src={message} alt="" />
        <div className="title">
          <h1>See what our</h1>
          <h1>attendees have to say</h1>
        </div>
        <img className="scratch" src={scratch} alt="" />
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide testimonial-carousel"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button> */}
        </div>
        <div className="carousel-inner carousel-shadow">
          <div className="carousel-item active">
            <>
            <div className="testimonial-item">
                <h1>Attended the most innovative and informative events from the Window of Mt Kanchenjunga!</h1>
                <p>
                GDG Siliguri has organised the innovative Google DevFest events at SIT where every bits was enjoyable, informative and the energy from both side of Speaker, Organizer Audience have made the GDG more Masala-dar.
I have enjoyed lot and gain many knowledge for my core area of industry.
                </p>
                <div className="attendee">
                  <img src={speaker1} alt="" />
                  <div className="attendee-name">
                    <h3>Eshan Chattaraj</h3>
                    <p>Attendee @Devfest’19</p>
                  </div>
                </div>
              </div>
            </>
          </div>
          {/* <div className="carousel-item">
            <>
              <div className="testimonial-item">
                <h1>Attended the most innovative and informative events from the Window of Mt Kanchenjunga!</h1>
                <p>
                GDG Siliguri has organised the innovative Google DevFest events at SIT where every bits was enjoyable, informative and the energy from both side of Speaker, Organizer Audience have made the GDG more Masala-dar.
I have enjoyed lot and gain many knowledge for my core area of industry.
                </p>
                <div className="attendee">
                  <img src={speaker1} alt="" />
                  <div className="attendee-name">
                    <h3>Eshan Chattaraj</h3>
                    <p>Attendee @Devfest’19</p>
                  </div>
                </div>
              </div>
            </>
          </div> */}
          <div className="carousel-item">
            <>
              <div className="testimonial-item">
                <h1>Awesome Experience!</h1>
                <p>
                Got to learn a lot from the amazing speakers. I had a lot of fun interacting with other like minded developers from the region and participating in the hackathon! Eagerly waiting for the next Devfesf!
                </p>
                <div className="attendee">
                  <img src={speaker1} alt="" />
                  <div className="attendee-name">
                    <h3>Sahil Saha</h3>
                    <p>Attendee @Devfest’19</p>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* <div className="testimonials">
        <div className="testimonial-container-prev">
          <div className="testimonial-item">
            <h1>One of the best tech event I have attended!</h1>
            <p>
              Got to meet tons of talented people at Devfest, and chatting with
              the speakers was the best part for me.
            </p>
            <div className="attendee">
              <img src={speaker1} alt="" />
              <div className="attendee-name">
                <h3>Subhranil Sarkar</h3>
                <p>Attendee @Devfest’19</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <h1>One of the best tech event I have attended!</h1>
            <p>
              Got to meet tons of talented people at Devfest, and chatting with
              the speakers was the best part for me.
            </p>
            <div className="attendee">
              <img src={speaker1} alt="" />
              <div className="attendee-name">
                <h3>Subhranil Sarkar</h3>
                <p>Attendee @Devfest’19</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-container-next">
          <div className="testimonial-item">
            <h1>One of the best tech event I have attended!</h1>
            <p>
              Got to meet tons of talented people at Devfest, and chatting with
              the speakers was the best part for me.
            </p>
            <div className="attendee">
              <img src={speaker1} alt="" />
              <div className="attendee-name">
                <h3>Subhranil Sarkar</h3>
                <p>Attendee @Devfest’19</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
