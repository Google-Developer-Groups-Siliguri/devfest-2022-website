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
import ilove from "../assets/images/SponsorsLogo/ilove.png";
import fg from "../assets/images/community-partners/fg.png";
import "../stylesheet/Sponsor.css";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <div className="container">
        <p className="text-center sponsor-heading mt-5 mb-5">
          In association with
        </p>
        <center>
          <div className="col-sm">
            <a
              href="https://www.sittechno.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card sponsorcards ">
                <img
                  src={sitlogo}
                  className="card-img-top img1 img1"
                  alt="..."
                />
              </div>
            </a>
          </div>
        </center>
        <p className="text-center sponsor-heading mt-5 mb-5">Sponsors</p>
        <center>
          <div className="row">
            <div className="col-sm">
              <a
                href="https://www.cyberhelpindia.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={cyber} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://thekalimpongstore.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img
                    src={kalimpongstore}
                    className="card-img-top img1"
                    alt="..."
                  />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a href="https://edugree.in/" target="_blank" rel="noreferrer">
                <div className="card sponsorcards">
                  <img src={edugree} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a
                href="https://dimensionlabs.in/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={dlabs} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://www.facebook.com/tedviser/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={ted} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://www.trythemenu.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={trymenu} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a
                href="https://www.prospektro.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={prosp} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://assetmantle.one/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img
                    src={assetmantle}
                    className="card-img-top assetmantle"
                    alt="..."
                  />
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://www.taskade.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards">
                  <img src={taskade} className="card-img-top img1" alt="..." />
                </div>
              </a>
            </div>
          </div>
        </center>
      </div>

      <p className="text-center sponsor-heading mt-5 mb-5">Our Partners</p>
      <div className="container">
        <div className="row">
          <center className="row space-between">
          <div className="col-sm">
              <a
                href="https://www.cyberhelpindia.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards2 card1">
                  <img src={fg} className="card-img-top fbimg" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title title1">F & B Partner</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="https://www.cyberhelpindia.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards2 card1">
                  <img src={cyber} className="card-img-top img1" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title title1">Digital Partner</h6>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm">
              <a
                href="https://www.facebook.com/ILoveSiliguri.ILS/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card sponsorcards2 card1">
                  <img src={ilove} className="card-img-top img2" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title title2">Media Partner</h6>
                  </div>
                </div>
              </a>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
