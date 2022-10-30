import React from "react";
import assetmantle from "../assets/images/assetmantle.png";
import deeptanshu from "../assets/images/deeptanshu.png";
import "../stylesheet/SpecialGuest.css";
const SpecialGuest = () => {
  return (
    <>
      <section id="special-guest">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>Our Special Guest</h1>
              <h3>Deepanshu Tripathi</h3>
              <p>
                Founder,&nbsp;&nbsp;
                <img
                  src={assetmantle}
                  alt="mantle"
                  className="special-logo"
                  width="20px"
                />&nbsp;
                AssetMantle
              </p>
              <p>
                Add Content .... lorem ipsum, DevFests are local tech
                conferences hosted by Google Developer Groups Each DevFest event
                is crafted by its local organizers to fit the needs and
                interests of its local developer community, through hands-on
                learning experiences, technical talks delivered in local
                languages by experts, or by simply meeting fellow local
                developers.
              </p>
            </div>
            <div className="col-sm">
              <center>
                <img src={deeptanshu} alt="deepanshu" className="special-speaker-img" />
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialGuest;
