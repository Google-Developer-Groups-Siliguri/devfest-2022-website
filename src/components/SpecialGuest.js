import React from "react";
import assetmantle from "../assets/images/assetmantle.png";
import deeptanshu from "../assets/images/deeptanshu.png";
import arrow from "../assets/images/arrow.png";
import redcircle from "../assets/images/redcircle.png";
import "../stylesheet/SpecialGuest.css";
const SpecialGuest = () => {
  return (
    <>
      <section id="special-guest">
        <div className="container">
        
          <div className="row">
          
            <div className="col-sm">
            <img className="guest-arrow" src={arrow} alt="" />
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
              <h4><img src={redcircle} width="24px" alt="circle"/>&nbsp;Live Session on DIDS and inter NFTS</h4>
              <p>
              Building Decentralisation Infrastructure at AssetMantle
About Blockchain distributed applications design and development( tendermint).
              </p>
            </div>
            <div className="col-sm">
              <center>
                <div className="guest-image">
                <img src={deeptanshu} alt="deepanshu" className="special-speaker-img" />
                </div>
              </center>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialGuest;
