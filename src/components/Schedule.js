import React from "react";
import Navbar from "../components/NavBar";
import "../stylesheet/Schedule.css";
import Footer2 from "./Footer2";

const day1S = true;
const day2S = true;
const day1 = [
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
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
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Getting started with CI with Drone CI",
        speaker: "Kamesh Sampath",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Connected health ecosystem",
        speaker: "Senthil Kumar",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Flutter: Computer Vision with ML Kit",
        speaker: "Bhavik Makwana",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Journey towards multi-cloud architecture",
        speaker: "Jyoti Mishra",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Finding insights in centuries old photos - A Google Cloud AI Story",
        speaker: "Anubhav Singh",
    },
];

const day2 = [
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Intel oneAPI and its advantages for HPC",
        speaker: "Kazi Haque",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Ai Toolkit and SYCL",
        speaker: "Abhishek Nandy",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "Kotlin Koin with Coroutines : A walkthrough on the Asynchronous Programming with Kotlin",
        speaker: "Rishabh Gupta",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        duration: "30 Mins",
        topic: "DIDS and InterNFTS - Live session",
        speaker: "Deepanshu Tripathi",
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
                                                    {/* <p className="startTime">{item.startTime}</p> */}
                                                    <h2>{item.duration}</h2>
                                                    {/* <span className="endTime">{item.endTime}</span> */}
                                                </div>
                                                <div className="col-md-9 col-8">
                                                    <span className="topic">{item.topic}</span>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <span className="schedule-speaker">{item.speaker}</span>
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
                                                    {/* <p className="startTime">{item.startTime}</p> */}
                                                    <h2>{item.duration}</h2>
                                                    {/* <span className="endTime">{item.endTime}</span> */}
                                                </div>
                                                <div className="col-md-9 col-8">
                                                    <span className="topic">{item.topic}</span>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <span className="schedule-speaker">{item.speaker}</span>
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