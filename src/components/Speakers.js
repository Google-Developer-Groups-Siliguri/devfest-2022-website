import React from "react";
import "../stylesheet/Speakers.css";
import Dhrumil from "../assets/speakers/Dhrumil.png"
import Rishab from "../assets/speakers/Rishab.png"
import Jyoti from "../assets/speakers/Jyoti.png"
import Abhishek from "../assets/speakers/Abhishek.png"

class Speakers extends React.Component {
  state = {
    divcontainer: false,
  };
  render() {
    var HandleLoad = (e) => {
      this.setState({ divcontainer: !this.state.divcontainer });
    };

    const x = this.state.divcontainer;
    return (
      <div className="speakers-container">
        <h1>Speakers</h1>
        <div className="speakers">
          <div className="speaker-card">
            <img src={Dhrumil} alt="" />
            <p className="speaker-name">Dhrumil Shah</p>
            <p className="speaker-post">Lead Architect at TATA
              Digital, GDE for Flutter
              & Dart</p>
            <br />
            <a href="https://www.linkedin.com/in/dhuma1981/">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={Rishab} alt="" />
            <p className="speaker-name">Rishabh Gupta</p>
            <p className="speaker-post">SDE, Mercedes Benz
              Android Framework
              Developer</p>
            <br />
            <a href="https://www.linkedin.com/in/rishabhgupta94/">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={Jyoti} alt="" />
            <p className="speaker-name">Jyoti Mishra</p>
            <p className="speaker-post">SDE, Evertz
              GDG Organize</p>
            <br />
            <a href="https://www.linkedin.com/in/jyotim29/">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
          <div className="speaker-card">
            <img src={Abhishek} alt="" />
            <p className="speaker-name">Abhishek Nandy</p>
            <p className="speaker-post">Co-Founder at Dynopii,
              Intel Software Innovator</p>
            <br />
            <a href="https://www.linkedin.com/in/abhishek-nandy/">
              <p className="speaker-profile">View profile</p>
            </a>
          </div>
        </div>
        {x && <div><MoreSpeakers /></div>}
        <button style={{ marginTop: "1rem" }} className="btn btns" onClick={HandleLoad}>{x ? 'Load Less' : 'Load More'}</button>
      </div>
    );
  }
}

function MoreSpeakers() {
  const speakerData = [
    {
      src: require('../assets/speakers/Bhavik.png'),
      speakerName: "Bhavik Makwana",
      spekerPost: "Frontend Engineer, Multipl and GDE",
      speakerProfile: "https://www.linkedin.com/in/ibhavikmakwana/",
    },
    {
      src: require('../assets/speakers/kamesh.png'),
      speakerName: "Kamesh Sampath",
      spekerPost: "Director of Developer Advocacy, Harness, Google Developer Expert ",
      speakerProfile: "https://www.linkedin.com/in/kameshsampath/",
    },
    {
      src: require('../assets/speakers/Kazi.png'),
      speakerName: "Kazi Haque",
      spekerPost: "Co-Founder at Dynopii, GDG Cloud Organizer, Intel Software Innovator",
      speakerProfile: "https://www.linkedin.com/in/haquekazi/",
    },
    {
      src: require('../assets/speakers/Rohan.png'),
      speakerName: "Rohan Prasad",
      spekerPost: "Software Engineer, Microsoft",
      speakerProfile: "https://www.linkedin.com/in/rohanprasadofficial/",
    },
    {
      src: require('../assets/speakers/Senthil.png'),
      speakerName: "Senthil Kumar",
      spekerPost: "Founder GeoMeo Informatics, GDG Organizer",
      speakerProfile: "https://www.linkedin.com/in/senthilkumar-murugesan/",
    },
    {
      src: require('../assets/speakers/Anubhav.png'),
      speakerName: "Anubhav Singh",
      spekerPost: "Co-Founder at Dynopii, GDG Organiser",
      speakerProfile: "https://www.linkedin.com/in/xprilion/",
    },
  ]

  return (
    <div className="speakers">
      {speakerData.map((item, key) => (
        <div key={item.id} className="speaker-card" >
          <img src={item.src} alt="" />
          <p className="speaker-name">{item.speakerName}</p>
          <p className="speaker-post">{item.spekerPost}</p>
          <br />
          <a href={item.speakerProfile} target="_blank">
            <p className="speaker-profile">View profile</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Speakers;
