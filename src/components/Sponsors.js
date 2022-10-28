import React from "react";
import googledevelopers from "../assets/images/googledevelopers.png";
import sitlogo from "../assets/images/sitlogo.png";
import taskade from "../assets/images/SponsorsLogo/taskade.png";
import assetmantle from "../assets/images/SponsorsLogo/assetmantle.jpeg";
import kalimpongstore from "../assets/images/SponsorsLogo/kalimpongstore.png";
import cyber from "../assets/images/SponsorsLogo/cyber.png";
import edugree from "../assets/images/SponsorsLogo/edugree.png";
import ted from "../assets/images/SponsorsLogo/ted.png";
import dlabs from "../assets/images/SponsorsLogo/dlabs.jpeg";
import trymenu from "../assets/images/SponsorsLogo/try.png";
import prosp from "../assets/images/SponsorsLogo/pros.png";
import "../stylesheet/Sponsor.css";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <p className="text-center dev-heading mt-5 mb-5">Sponsors</p>
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
                <img src={taskade} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card2">
                <img src={kalimpongstore} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title2">Gold Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={assetmantle} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="card sponsorcards card2">
                <img src={cyber} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title2">Gold Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card2">
                <img src={edugree} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title2">Gold Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card2">
                <img src={ted} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title2">Gold Sponsor</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={dlabs} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={trymenu} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card sponsorcards card3">
                <img src={prosp} className="card-img-top img2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title title3">Silver Sponsor</h5>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

      <p className="text-center dev-heading mt-5 mb-5">Our Partners</p>
      <div className="container">
        <div className="row">
          <center className="row space-between">
            <div className="col">
              <div className="card sponsorcards card1">
                <img
                  src={googledevelopers}
                  className="card-img-top img1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title title1">Digital Partner</h5>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card sponsorcards card1">
                <img
                  src={googledevelopers}
                  className="card-img-top img1"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title title1">Media Partner</h5>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
