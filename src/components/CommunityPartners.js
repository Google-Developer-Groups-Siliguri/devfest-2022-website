import React from "react";
import "../stylesheet/CommunityPartners.css";
import gdgicon from "../assets/images/gdgicon.png";
import technext from "../assets/images/community-partners/technext.png";
import flutterkolkata from "../assets/images/community-partners/flutterkolkata.png"
const CommunityPartners = () => {
  return (
    <>
      <section id="community-partners">
        <div className="container">
          <center>
            <p className="text-center dev-heading mt-5 mb-5">Community Partners</p>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubs</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubs</h5>
                  <h6 className="text-muted">Cooch Behar Government Engineering College</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubs</h5>
                  <h6 className="text-muted">Sikkim Manipal Institute of Technology</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubs</h5>
                  <h6 className="text-muted">Jalpaiguri Government Engineering College</h6>
                </div>
              </div> 
              <div className="col-lg-3 col-md-6 col-12">
                  {/* <div className="partnersbox">
                    <img src={flutterkolkata} alt="gdgicon" className="cpimgfix" />
                    <h5 className="text-muted">F</h5>
                    <h6 className="text-muted">Jalpaiguri Government Engineering College</h6>
                  </div> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="partnersbox">
                    <img src={technext} alt="gdgicon" className="cpimgfix" />
                    <h5 className="text-muted">Tech Nest</h5>
                    {/* <h6 className="text-muted">Jalpaiguri Government Engineering College</h6> */}
                  </div>
                </div> 
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="partnersbox">
                    <img src={flutterkolkata} alt="gdgicon" className="cpimgfix" />
                    <h5 className="text-muted">Flutter Kolkata</h5>
                    {/* <h6 className="text-muted">Jalpaiguri Government Engineering College</h6> */}
                  </div>
                </div>
            </div>
            {/* <div className="row">
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
              <div className="col-sm">
                <div className="partnersbox">
                  <img src={gdgicon} alt="gdgicon" className="cpimgfix" />
                  <h5 className="text-muted">Google Developer Student Clubss</h5>
                  <h6 className="text-muted">Siliguri Institute Of Technology</h6>
                </div>
              </div>
            </div> */}
          </center>
        </div>
      </section>
    </>
  );
};

export default CommunityPartners;