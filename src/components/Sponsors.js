import React from "react";
import googledevelopers from "../assets/images/googledevelopers.png";
import sitlogo from "../assets/images/sitlogo.png";
import "../stylesheet/Sponsor.css";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <h1 className="sponsor-heading">Sponsors</h1>
      <div className="container">
        <div className="row">
          <center>
            <div className="col-sm">
              <div className="card sponsorcards card1">
                <img
                  src={googledevelopers}
                  className="card-img-top img1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title title1">Title Sponsor</h5>
                </div>
              </div>
            </div>
          </center>
        </div>
        <div className="row">
          <center>
            <div className="col-sm">
              <div className="card sponsorcards card2">
                <img src={sitlogo} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title2">Gold Sponsor</h5>
                </div>
              </div>
            </div>
          </center>
        </div>
        <center>
          <div className="row">
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={sitlogo} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={sitlogo} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={sitlogo} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
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
