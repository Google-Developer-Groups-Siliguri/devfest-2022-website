import React from "react";
import Navbar from "../components/NavBar";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../stylesheet/Team.css";
import Footer2 from "./Footer2";

export default function Team() {
  const organisersData = [
    {
      src: require("../assets/images/speaker1.png"),
      organiserName: "Abhilasha Gupta",
      organiserPost: "Lead | 2020-2021",
      organiserGithub: "https://www.Github.com/",
      organiserInsta: "",
      organiserLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      organiserName: "Abhilasha Gupta",
      organiserPost: "Lead | 2020-2021",
      organiserGithub: "https://www.Github.com/",
      organiserInsta: "",
      organiserLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      organiserName: "Abhilasha Gupta",
      organiserPost: "Lead | 2020-2021",
      organiserGithub: "https://www.Github.com/",
      organiserInsta: "",
      organiserLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      organiserName: "Abhilasha Gupta",
      organiserPost: "Lead | 2020-2021",
      organiserGithub: "https://www.Github.com/",
      organiserInsta: "",
      organiserLinkedin: "",
    }
  ]


  const memberData = [
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
    {
      src: require("../assets/images/speaker1.png"),
      memberName: "Abhilasha Gupta",
      memberPost: "Lead | 2020-2021",
      memberGithub: "https://www.Github.com/",
      memberInsta: "",
      memberLinkedin: "",
    },
  ];

  return (
    <div>
      <Navbar active="team" />
      <div className="team-container">
        <div className="team-container-title">
          <h1>Team</h1>
          <p>Meet our devFest Siliguri 2022 organisers and volounteers </p>
        </div>
        <h1>Organisers</h1>
        <div className="organisers">
          {organisersData.map((item, key) => (
            <div key={item.id} className="member-card organiser-card">
              <img src={item.src} alt="" />
              <div>
                <p className="organiser-name">{item.organiserName}</p>
                <p className="organiser-post">{item.organiserPost}</p>
                <div className="members-social">
                  <a href={item.organiserLinkedin} target="_blank">
                    <BsLinkedin className="member-social-icon" color="black" />
                  </a>
                  <a href={item.organiserGithub} target="_blank">
                    <BsGithub className="member-social-icon" color="black" />
                  </a>
                  <a href={item.organiserInstab} target="_blank">
                    <FiInstagram
                      className="member-social-icon"
                      color="white"
                      fill="black"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1>Volunteers</h1>
        <div className="members">
          {memberData.map((item, key) => (
            <div key={item.id} className="member-card">
              <img src={item.src} alt="" />
              <div>
                <p className="member-name">{item.memberName}</p>
                <p className="member-post">{item.memberPost}</p>
                <div className="members-social">
                  <a href={item.memberLinkedin} target="_blank">
                    <BsLinkedin className="member-social-icon" color="black" />
                  </a>
                  <a href={item.memberGithub} target="_blank">
                    <BsGithub className="member-social-icon" color="black" />
                  </a>
                  <a href={item.memberInstab} target="_blank">
                    <FiInstagram
                      className="member-social-icon"
                      color="white"
                      fill="black"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
