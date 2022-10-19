import React from "react";
import joingdg from "../assets/images/JoinGdg.png";
import joingdgmob from "../assets/images/joingdgmob.png";
import "../stylesheet/JoinGdg.css";
const JoinGdg = () => {
  return (
    <>
      <section id="joingdg">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={joingdg} alt="joingdg" className="joingdgimg" />
            <img src={joingdgmob} alt="joingdg" className="joingdgmobimg" />
          </div>
          <div className="col-lg-6 col-12 d-flex">
            <div className="container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <h1 className="joingdg-h1">Join GDG Siliguri</h1>
                    <p className="joingdg-p">
                    GDG Siliguri is based out of Siliguri and handles the geographic region of North Bengal and Sikkim. We are a group consisting of both student and professional developers and we conduct a lot of events to empower the local tech community. These include tech talks, hackathons, codelabs, workshops and more.
                    </p>
                    <a href="https://gdg.community.dev/gdg-siliguri/">
                    <button className="btn btn-primary">Join Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </section>
    </>
  );
};

export default JoinGdg;
