import React from "react";
import googledevelopers from "../assets/images/googledevelopers.png";
import sitlogo from "../assets/images/sitlogo.png";
import "../stylesheet/Sponsor.css";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <div className="container">
        <br />
        <center>
          <h1 style={{ fontSize: "4rem" }}>Sponsors</h1>
        </center>
        <div className="row">
          <center>
            <div className="cardbox1">
              <img src={googledevelopers} style={{minHeight:"300px",maxWidth:"500px"}} className="cardimgfix" alt="" />
              <div className="bottombox1">
                <p>Title Sponsor</p>
              </div>
            </div>
          </center>
        </div>
        <br />
        <div className="row">
          <center>
            <div className="cardbox2">
              <img src={sitlogo} className="cardimgfix" alt="" />
              <div className="bottombox2">
                <p>Gold Sponsor</p>
              </div>
            </div>
          </center>
        </div>
        <br />
        <center>
          <div className="row">
            <div className="col-sm">
              <div className="cardbox3">
                <img src={sitlogo} className="cardimgfixsilver" alt="" />
                <div className="bottombox3">
                  <p>Silver Sponsor</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="cardbox3">
                <img src={sitlogo} className="cardimgfixsilver" alt="" />
                <div className="bottombox3">
                  <p>Silver Sponsor</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="cardbox3">
                <img src={sitlogo} className="cardimgfixsilver" alt="" />
                <div className="bottombox3">
                  <p>Silver Sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
};

export default Sponsors;
