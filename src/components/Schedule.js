import React from "react";
import Navbar from "../components/NavBar";
import "../stylesheet/Schedule.css";
import Footer2 from "./Footer2";

const day1S = true;
const day2S = true;
const day1 = [
    {
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        duration: "60 Mins",
        topic: "Registration",
        speaker: "Organising Team",
    },
    {
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        duration: "30 Mins",
        topic: "Introduction",
        speaker: "Organising Team",
    },
    {
        startTime: "10:40 AM",
        endTime: "11:10 AM",
        duration: "30 Mins",
        topic: "Code or NoCode for Flutter",
        speaker: "Dhrumil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Demystifying Frontend Development",
        speaker: "Rohan Prasad",
    },
    {
        startTime: "12:00 PM",
        endTime: "12:30 PM",
        duration: "30 Mins",
        topic: "Getting started with CI with Drone CI",
        speaker: "Kamesh Sampath",
    },
    {
        startTime: "01:00 PM",
        endTime: "2:00 PM",
        duration: "60 Mins",
        topic: " Break",
        speaker: "NA",
    },
    {
        startTime: "02:15 PM",
        endTime: "02:45 PM",
        duration: "30 Mins",
        topic: "Connected health ecosystem",
        speaker: "Senthil Kumar",
    },
    {
        startTime: "02:50 PM",
        endTime: "03:20 PM",
        duration: "30 Mins",
        topic: "Flutter: Computer Vision with ML Kit",
        speaker: "Bhavik Makwana",
    },  
    {
        startTime: "03:30 PM",
        endTime: "04:00 PM",
        duration: "30 Mins",
        topic: "Journey towards multi-cloud architecture",
        speaker: "Jyoti Mishra",
    },
    {
        startTime: "04:15 PM",
        endTime: "04:45 PM",
        duration: "30 Mins",
        topic: "Finding insights in centuries old photos - A Google Cloud AI Story",
        speaker: "Anubhav Singh",
    },
    {
        startTime: "05:00 PM",
        endTime: "05:30 PM",
        duration: "30 Mins",
        topic: "Concluding Day 1",
        speaker: "Organising Team",
    },
];

const day2 = [
    {
        startTime: "10:00 AM",
        endTime: "10:30 AM",
        duration: "30 Mins",
        topic: "Introduction",
        speaker: "Organising Team",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Intel oneAPI and its advantages for HPC",
        speaker: "Kazi Haque",
    },
    {
        startTime: "11:20 AM",
        endTime: "11:50 AM",
        duration: "30 Mins",
        topic: "Ai Toolkit and SYCL",
        speaker: "Abhishek Nandy",
    },
    {
        startTime: "12:00 AM",
        endTime: "12:30 PM",
        duration: "30 Mins",
        topic: "Kotlin Koin with Coroutines : A walkthrough on the Asynchronous Programming with Kotlin",
        speaker: "Rishabh Gupta",
    },
    {
        startTime: "12:30 PM",
        endTime: "01:00 PM",
        duration: "30 Mins",
        topic: "DIDS and InterNFTS - Live session",
        speaker: "Deeptanshu Tripathi",
    },
    {
        startTime: "01:00 PM",
        endTime: "2:00 PM",
        duration: "60 Mins",
        topic: " Break",
        speaker: "NA",
    },
    {
        startTime: "02:00 PM",
        endTime: "4:30 PM",
        duration: "150 Mins",
        topic: "Workshop - Intel OneAPI with HPC and ML Kit",
        speaker: "Kazi Haque",
    },
    {
        startTime: "02:00 PM",
        endTime: "4:30 PM",
        duration: "150 Mins",
        topic: "Workshop - Getting started with CI with Drone CI - DevOps",
        speaker: "Kamesh Sampath ",
    },
    {
        startTime: "02:00 PM",
        endTime: "4:30 PM",
        duration: "150 Mins",
        topic: "Workshop - MAD - Mobile Application Development with Flutter - Deep Dive",
        speaker: "Bhavik Makwana & Dhrumil Shah",
    },
]

export default function Schedule() {
    return (
        <div className="page">
            <Navbar active="schedule" />
            <div className="ScheduleCss">
                <div className="bg-color ">
                    <div className="container text-start py-5 boxS">
                        <p className="headS text-start">Schedule</p>
                        <p className="info">
                            Check out the schedule below and don't forget to mark your calendar so
                            that you don't miss out on any sessions.
                        </p>
                        <br />
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="home-tab-pane"
                                    aria-selected="true"
                                >
                                    DAY 1
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile-tab-pane"
                                    aria-selected="false"
                                >
                                    DAY 2
                                </button>
                            </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="home-tab-pane"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabindex="0"
                            >
                                {day1S ? day1.map((item, key) => (
                                    <div
                                        key={item.id}
                                        className="accordion-item tab-pane fade show "
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="container">
                                            <div className="row flex-row">
                                                <div className="col-md-2 col-3 schTime text-end py-2">
                                                    <p className="startTime">{item.startTime}</p>
                                                    {/* <span className="endTime">{item.endTime}</span> */}
                                                    <h2>{item.duration}</h2>
                                                </div>
                                                <div className="col-md-9 col-8 py-2">
                                                    
                                                    <span className="topic">{item.topic}</span>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <span id="schedule-speaker">{item.speaker}</span>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : <div className="container text-center mt-5">
                                    <h1>Coming Soon....</h1>
                                </div>}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="profile-tab-pane"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                                tabindex="0"
                            >
                                {day2S ? day2.map((item, key) => (
                                    <div
                                        key={item.id}
                                        className="accordion-item tab-pane fade show "
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="container">
                                        <div className="row flex-row">
                                                <div className="col-md-2 col-3 schTime text-end py-2">
                                                    <p className="startTime">{item.startTime}</p>
                                                    {/* <span className="endTime">{item.endTime}</span> */}
                                                    <h2>{item.duration}</h2>
                                                </div>
                                                <div className="col-md-9 col-8 py-2">
                                                    <span className="topic">{item.topic}</span>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <span id="schedule-speaker">{item.speaker}</span>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : <div className="container boxS text-center mt-5">
                                    <h1>Coming Soon....</h1>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer2 />
                </div>
            </div>
        </div>
    );
}