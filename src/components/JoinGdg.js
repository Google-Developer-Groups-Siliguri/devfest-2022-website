import React from "react";
import joingdg from "../assets/images/JoinGdg.png";
import "../stylesheet/JoinGdg.css";
const JoinGdg = () => {
  return (
    <>
      <section id="joingdg">
        <div className="row">
          <div className="col-sm-6">
            <img src={joingdg} alt="joingdg" className="joingdgimg" />
          </div>
          <div className="col-sm-6">
            <div className="container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <h1>Join GDG Siliguri</h1>
                    <p>
                      DevFests are local tech conferences hosted by Google
                      Developer Groups (GDG) around the world. Each DevFest
                      event is crafted by its local organizers to fit the needs
                      and interests of its local developer community.
                    </p>
                    <button className="btn btn-primary">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinGdg;
