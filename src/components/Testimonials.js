import React,{useState, useEffect} from 'react'
import "../stylesheet/Testimonials.css"
import message from "../assets/images/message.png"
import scratch from "../assets/images/scratch.png"
import speaker1 from '../assets/images/speaker1.png'

export default function Testimonials() {

  const data = [
    <div className="carousel-item">
      <h1>One of the best tech event I have attended!</h1>
      <p>
        Got to meet tons of talented people at Devfest, and chatting with the
        speakers was the best part for me.
      </p>
      <div className="attendee">
        <img src={speaker1} alt="" />
        <div className="attendee-name">
          <h3>Subhranil Sarkar</h3>
          <p>Attendee @Devfest’19</p>
        </div>
      </div>
    </div>,
    <div className="carousel-item" >
      <h1>One of the best tech event I have attended!</h1>
      <p>
        Got to meet tons of talented people at Devfest, and chatting with the
        speakers was the best part for me.
      </p>
      <div className="attendee">
        <img src={speaker1} alt="" />
        <div className="attendee-name">
          <h3>Subhranil Sarkar</h3>
          <p>Attendee @Devfest’19</p>
        </div>
      </div>
    </div>,
    <div className="carousel-item">
    <h1>One of the best tech event I have attended!</h1>
    <p>
      Got to meet tons of talented people at Devfest, and chatting with the
      speakers was the best part for me.
    </p>
    <div className="attendee">
      <img src={speaker1} alt="" />
      <div className="attendee-name">
        <h3>Subhranil Sarkar</h3>
        <p>Attendee @Devfest’19</p>
      </div>
    </div>
  </div>
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      console.log(data.length);
      return setCurrentIndex(0);
      
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


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
        <div className="testimonials">
        <div className="carousel-container">
          {data.map((item, index) => {
            return (
              <div style={{transform:`translateY(${currentIndex * 100}%)`}} key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
