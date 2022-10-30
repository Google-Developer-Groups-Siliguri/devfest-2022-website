import React from "react";
import Navbar from "../components/NavBar";
import "../stylesheet/Schedule.css";
import Footer2 from "./Footer2";

const day1S = true;
const day2S = false;
const day1 = [
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Introduction",
        speaker: "Dhurmil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Roadmap for Android Developers and getting started with Kotlin",
        speaker: "Dhurmil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Roadmap for ML professionals and building end to end pipelines using ML",
        speaker: "Dhurmil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Introduction",
        speaker: "Dhurmil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Roadmap for Android Developers and getting started with Kotlin",
        speaker: "Dhurmil Shah",
    },
    {
        startTime: "10:45 AM",
        endTime: "11:15 AM",
        topic: "Roadmap for ML professionals and building end to end pipelines using ML",
        speaker: "Dhurmil Shah",
    },
];

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
                                                    <span className="endTime">{item.endTime}</span>
                                                </div>
                                                <div className="col-md-9 col-8">
                                                    <span className="topic">{item.topic}</span>
                                                    <div className="col-md-9 col-8">
                                                        <br></br>
                                                    </div>
                                                    <div className="col-md-9 col-8">
                                                        <span className="topic">{item.speaker}</span>
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
                                {day2S ? day1.map((item, key) => (
                                    <div
                                        key={item.id}
                                        className="accordion-item tab-pane fade show "
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-2 col-3 schTime text-end py-2">
                                                    <h2>{item.startTime}</h2>
                                                    <span>{item.endTime}</span>
                                                </div>
                                                <div className="col-md-9 col-8">
                                                    <span className="topic">{item.topic}</span>
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