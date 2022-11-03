import React from "react";
import Navbar from "../components/NavBar";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../stylesheet/Team.css";
import Footer2 from "./Footer2";

export default function Team() {
  const organisersData = [
    {
      src: require("../assets/images/team/Avirup Basu.jpeg"),
      organiserName: "Avirup Basu",
      organiserPost: "P360 | Tech Lead",
      organiserGithub: "https://github.com/avirup171",
      organiserTwitter: "https://twitter.com/avirup171",
      organiserLinkedin: "https://www.linkedin.com/in/avirup171/",
    },
    {
      src: require("../assets/images/team/Debajit Mallick.jpeg"),
      organiserName: "Debajit Mallick",
      organiserPost: "P360 | Software Engineer",
      organiserGithub: "https://github.com/debajit13",
      organiserTwitter: "https://twitter.com/MallickDebajit",
      organiserLinkedin: "https://www.linkedin.com/in/debajit-mallick/",
    },
    {
      src: require("../assets/images/team/Sourav Das.png"),
      organiserName: "Sourav Das",
      organiserPost: "Try The Menu | Founder",
      organiserGithub: "https://github.com/srv09",
      organiserTwitter: "https://twitter.com/SouravD48488780?t=M_h75Zg9PHjh-GK0RvkaCg&s=09",
      organiserLinkedin: "https://www.linkedin.com/in/sourav-das-64227a1a2/",
    }
  ]


  const memberData = [
    {
      src: require("../assets/images/team/Alok Kumar Sah.jpg"),
      memberName: "Alok Kumar Sah",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/alokkumax",
      memberTwitter: "https://twitter.com/alokkumax11",
      memberLinkedin: "https://www.linkedin.com/in/alok-kumar-987b4b190/",
    },
    {
      src: require("../assets/images/team/Abhilasha Gupta.jpg"),
      memberName: "Abhilasha Gupta",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/AbhilashaGupta16",
      memberTwitter: "https://twitter.com/abhilasha_4sq",
      memberLinkedin: "https://www.linkedin.com/in/abhilasha-gupta-829ba7190/",
    },
    {
      src: require("../assets/images/team/Keshav Agarwal.jpeg"),
      memberName: "Keshav Agarwal",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/InfamousBolt",
      memberTwitter: "https://www.twitter.com/keshav21681346",
      memberLinkedin: "https://www.linkedin.com/in/keshav-agarwal-b39322192",
    },{
      src: require("../assets/images/team/Suvaditya Gupta.jpg"),
      memberName: "Suvaditya Gupta",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/suvadityagupta",
      memberTwitter: "https://twitter.com/suv_aditya?t=3fFprqM3AZfcKMD95l2Vxw&s=09",
      memberLinkedin: "https://www.linkedin.com/in/suvaditya-gupta-6a5286194",
    },
    {
      src: require("../assets/images/team/Falguni Sarkar.jpg"),
      memberName: "Falguni Sarkar",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://www.github.com/lostgirljourney",
      memberTwitter: "https://www.twitter.com/isshefalguni",
      memberLinkedin: "https://www.linkedin.com/in/falgunisarkar",
    },
    {
      src: require("../assets/images/team/Aniruddha Das.jpg"),
      memberName: "Aniruddha Das",
      memberPost: "Student | ECE - 4th Year",
      memberGithub: "https://github.com/OctoplusNinja",
      memberTwitter: "https://twitter.com/isthatAniruddha",
      memberLinkedin: "https://www.linkedin.com/in/aniruddhadas852/",
    },
    {
      src: require("../assets/images/team/Aritra Kumar Datta Chaudhury.jpeg"),
      memberName: "Aritra Kumar Datta Chaudhury",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/Aritra995",
      memberTwitter: "https://twitter.com/Aritra995",
      memberLinkedin: "https://www.linkedin.com/in/aritra-kumar-datta-chaudhury-9a4a7b194",
    },
    {
      src: require("../assets/images/team/Sayan Malakar.jpg"),
      memberName: "Sayan Malakar",
      memberPost: "Student | BA - 2nd Year",
      memberGithub: "https://github.com/sayan681",
      memberTwitter: "https://twitter.com/SayanMalakar17",
      memberLinkedin: "https://www.linkedin.com/in/sayan-malakar-833183221",
    }
    ,
    {
      src: require("../assets/images/team/Deep Dhar.jpg"),
      memberName: "Deep Dhar",
      memberPost: "Student | CSE - 4th Year",
      memberGithub: "https://github.com/deepdhar",
      memberTwitter: "https://twitter.com/deepdhar2000?t=67cpGFg32ndBLYe0N_8qlg&s=09",
      memberLinkedin: "https://www.linkedin.com/in/deep-dhar",
    },
    {
      src: require("../assets/images/team/Srishti Majumder.jpg"),
      memberName: "Srishti Majumder",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/Srishtihere",
      memberTwitter: "https://twitter.com/MajumderSrishti",
      memberLinkedin: "https://www.linkedin.com/in/srishti-majumder-6560bb200",
    },
    {
      src: require("../assets/images/team/Subhranil Sarkar.JPG"),
      memberName: "Subhranil Sarkar",
      memberPost: "Student | ECE - 3th Year",
      memberGithub: "https://github.com/subhranilsarkar-dev",
      memberTwitter: "https://twitter.com/subhranilsarkr?t=m2Wf-6DtLE3Yzxov84TJ7w&s=09",
      memberLinkedin: "https://www.linkedin.com/in/subhranil-sarkar",
    },
    {
      src: require("../assets/images/team/Swarup Das.jpg"),
      memberName: "Swarup Das ",
      memberPost: "Student | ECE - 3th Year",
      memberGithub: "https://www.github.com/Das-Swarup",
      memberTwitter: "https://www.twitter.com/RonyzGameShow",
      memberLinkedin: "https://www.linkedin.com/in/swarup-das-8bb857200",
    },
    {
      src: require("../assets/images/team/Soumwadeep Guha.jpg"),
      memberName: "Soumwadeep Guha ",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/soumwadeep",
      memberTwitter: "https://twitter.com/SoumwadeepGuha",
      memberLinkedin: "https://www.linkedin.com/in/soumwadeepguha/",
    },
    {
      src: require("../assets/images/team/Aritra Saha.jpg"),
      memberName: "Aritra Saha ",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/aritrasahacodes",
      memberTwitter: "https://twitter.com/Aritra047",
      memberLinkedin: "https://www.linkedin.com/in/aritra-saha-0418a41b1/",
    },
    {
      src: require("../assets/images/team/Parna Das.jpg"),
      memberName: "Parna Das",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/parnadas10",
      memberTwitter: "https://twitter.com/parnadas096?t=IBqeRr1B179xbk1c2QWPsQ&s=09",
      memberLinkedin: "https://www.linkedin.com/in/parna-das-47b886202",
    },
    {
      src: require("../assets/images/team/Debajyoti Sarkar.jpg"),
      memberName: "Debajyoti Sarkar",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/debajyotisarkarhome",
      memberTwitter: "https://twitter.com/debuisalive",
      memberLinkedin: "https://www.linkedin.com/in/debajyoti-sarkar-oos/",
    },
    {
      src: require("../assets/images/team/Shreya Roy.jpeg"),
      memberName: "Shreya Roy",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/Shreya010tech",
      memberTwitter: "https://twitter.com/ShreyaR19458856",
      memberLinkedin: "https://www.linkedin.com/in/shreya-roy-3147881b7/",
    },
    {
      src: require("../assets/images/team/Gourab Deb.jpg"),
      memberName: "Gourab Deb",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/Gourabdeb1619",
      memberTwitter: "https://twitter.com/gourabd14590200",
      memberLinkedin: "https://www.linkedin.com/in/gourab-deb-b77843142/",
    },
    {
      src: require("../assets/images/team/Mehnaz Yeasmin.jpg"),
      memberName: "Mehnaz Yeasmin",
      memberPost: "Student | CSE - 3th Year",
      memberGithub: "https://github.com/Mehnaz14",
      memberTwitter: "https://twitter.com/yeasmin_mehnaz?t=CXPGmio1UbJpWVhF8lS4KA&s=09",
      memberLinkedin: "https://www.linkedin.com/in/mehnaz-yeasmin-724848200",
    },
    {
      src: require("../assets/images/team/Tirtha Bhattacharjee.jpg"),
      memberName: "Tirtha Bhattacharjee",
      memberPost: "Student | ECE - 3th Year",
      memberGithub: "https://github.com/Tirtha2001",
      memberTwitter: "https://twitter.com/happy_filter_",
      memberLinkedin: "https://www.linkedin.com/in/tirtha-bhattacharjee-212b37200/",
    },
    {
      src: require("../assets/images/team/Samadreeta Mukherjee.jpg"),
      memberName: "Samadreeta Mukherjee ",
      memberPost: "Student | BCA - 3th Year",
      memberGithub: "https://www.github.com/samadreeta001",
      memberTwitter: "https://www.twitter.com/SardonicYuri",
      memberLinkedin: "https://www.linkedin.com/in/samadreeta-mukherjee-08217a240/",
    },
    {
      src: require("../assets/images/team/Babin Chakrabarty.JPG"),
      memberName: "Babin Chakrabarty",
      memberPost: "Student | BA - 2nd Year",
      memberGithub: "https://github.com/bottleninja4gh",
      memberTwitter: "https://twitter.com/bottleninja4t?t=sCS-n6Co79BnLLWEh39SGg&s=09",
      memberLinkedin: "https://www.linkedin.com/in/babin-chakrabarty-598401192",
    },
    {
      src: require("../assets/images/team/Priya Chakraborty.jpg"),
      memberName: "Priya Chakraborty ",
      memberPost: "Student | EE - 3rd Year",
      memberGithub: "https://github.com/Priyachakraborty",
      memberTwitter: "https://twitter.com/Primoon2002",
      memberLinkedin: "https://www.linkedin.com/in/priya-chakraborty-a48940202/",
    },
    {
      src: require("../assets/images/team/Arijit Roy.png"),
      memberName: "Arijit Roy ",
      memberPost: "Student | Bsc - 2nd Year",
      memberGithub: "https://www.github.com/arijitroy2001",
      memberTwitter: "https://twitter.com/IamRoyArijit",
      memberLinkedin: "https://www.linkedin.com/in/arijit-roy-61b01b129",
    },
    
  ]

  return (
    <div>
      <Navbar active="team" />
      <div className="team-container">
        <div className="team-container-title">
          <h1>Team</h1>
          <p>Meet our DevFest Siliguri 2022 organisers and volunteers. </p>
        </div>
        <h1>Organisers</h1>
        <div className="organisers row">
          {organisersData.map((item, key) => (
            <div key={item.id} className="member-card organiser-card col-xl-4 col-md-6 col-12">
              <img src={item.src} alt="" />
              <div className="team-desc">
                <p className="organiser-name">{item.organiserName}</p>
                {/* <p className="organiser-post">{item.organiserPost}</p> */}
                <div className="members-social">
                  <a href={item.organiserLinkedin} target="_blank">
                    <BsLinkedin className="member-social-icon" color="black" />
                  </a>
                  <a href={item.organiserGithub} target="_blank">
                    <BsGithub className="member-social-icon" color="black" />
                  </a>
                  <a href={item.organiserTwitter} target="_blank">
                    <BsTwitter
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
              <div className="team-desc">
                <p className="member-name">{item.memberName}</p>
                {/* <p className="member-post">{item.memberPost}</p> */}
                <div className="members-social">
                  <a href={item.memberLinkedin} target="_blank">
                    <BsLinkedin className="member-social-icon" color="black" />
                  </a>
                  <a href={item.memberGithub} target="_blank">
                    <BsGithub className="member-social-icon" color="black" />
                  </a>
                  <a href={item.memberTwitter} target="_blank">
                    <BsTwitter
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
