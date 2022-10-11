import React from "react";
import "../stylesheet/WhatIsDevFest.css";
import comboimg from "../assets/images/whatisphotocombo.png";
const WhatIsDevFest = () => {
  return (
    <>
      <section id="whatisdevfest">
        <div className="addbg">
            <div className="whatisdevfest-row row">
              <div className="col-md-8 col-12">
                <div className="whatisdevfest-content">
                  <div className="whatisdevfest-content-header">
                    <h1>What Is DevFest? </h1>
                    <p>
                      DevFests are local tech conferences hosted by Google
                      Developer Groups Each DevFest event is crafted by its
                      local organizers to fit the needs and interests of its
                      local developer community, through hands-on learning
                      experiences, technical talks delivered in local languages
                      by experts, or by simply meeting fellow local developers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <img
                  src={comboimg}
                  alt="comboimg"
                  className="whatisdevfestimg"
                />
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsDevFest;
