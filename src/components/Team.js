import React from 'react'
import Navbar from "../components/NavBar";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../stylesheet/Team.css"

export default function Team() {

  const memberData =[
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
    {
      memberImage:"",
      memberName:"Abhilasha Gupta",
      memberPost:"Software Engineer",
      memberGithub:"https://www.Github.com/",
      memberInsta:"",
      memberLinkedin:"",
    },
  ]

  return (
    <div>
        <Navbar active="team"/>
        <div className="team-container">
          <h1>Team</h1>
          <div className="members">
        {memberData.map((item,key)=>(
        <div key={item.id} className="member-card" >
        <img src={item.src} alt="" />
        <div>
        <p className="member-name">{item.memberName}</p>
        <p className="member-post">{item.memberPost}</p>
        <div className="members-social">

        
        <a href={item.memberLinkedin} target="_blank">
          <BsLinkedin className='member-social-icon' color='black'/>
        </a>
        <a href={item.memberGithub} target="_blank">
          <BsGithub className='member-social-icon' color='black'/>
        </a>
        <a href={item.memberInstab} target="_blank">
          <FiInstagram className='member-social-icon'  color='white' fill='black'/>
        </a>
        </div>
        </div>
      </div>
      ))}
      </div>
        </div>
    </div>
  )
}
