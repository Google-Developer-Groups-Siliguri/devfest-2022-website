import React from "react";
import "../stylesheet/Speakers.css";
import s1 from "../assets/images/speaker1.png";
import s2 from "../assets/images/speaker2.png";
import s3 from "../assets/images/speaker3.png";
import s4 from "../assets/images/speaker4.png";

class Speakers extends React.Component {
  state = {
    divcontainer: false,
  };
  render() {
    var HandleLoad = (e) => {
      this.setState({ divcontainer: !this.state.divcontainer });
    };

    const x= this.state.divcontainer;
    return (
      <div className="speakers-container">
        <h1>Speakers</h1>
        <div className="speakers">
          <div className="speaker-card">
            <img src={s1} alt="" />
            <p className="speaker-name">Abhilasha Gupta</p>
            <p className="speaker-post">Software Developer</p>
            <br />
            <a href="">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={s2} alt="" />
            <p className="speaker-name">Abhilasha Gupta</p>
            <p className="speaker-post">Software Developer</p>
            <br />
            <a href="">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={s3} alt="" />
            <p className="speaker-name">Abhilasha Gupta</p>
            <p className="speaker-post">Software Developer</p>
            <br />
            <a href="">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={s4} alt="" />
            <p className="speaker-name">Abhilasha Gupta</p>
            <p className="speaker-post">Software Developer</p>
            <br />
            <a href="">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
        </div>
        {x&&<div><MoreSpeakers/></div>}
        <button onClick={HandleLoad}>{x?'Load Less':'Load More'}</button>
      </div>
    );
  }
}

function MoreSpeakers() {
  return (
    
    <div className="speakers">
      <div className="speaker-card">
        <img src={s1} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
      <div className="speaker-card">
        <img src={s2} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
      <div className="speaker-card">
        <img src={s3} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
      <div className="speaker-card">
        <img src={s1} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
      <div className="speaker-card">
        <img src={s4} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
      <div className="speaker-card">
        <img src={s2} alt="" />
        <p className="speaker-name">Abhilasha Gupta</p>
        <p className="speaker-post">Software Developer</p>
        <br />
        <a href="">
          <p className="speaker-profile">View profile</p>
        </a>
      </div>
    </div>
  );
}

export default Speakers;
