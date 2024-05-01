import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return <section id="about" className="small_pt">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="text_md_center">
            <img src="assets/images/about_img2.png" alt="about img" className="animation"
                  data-animation="zoomIn"
                  data-animation-delay="0.2s" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
          <div className="title_default_light title_border">
            <h4 className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s" >About DonatingIDF</h4>
            <p className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s" >we are five dedicated warriors who recently
                 served in Israel's last conflict, driven by duty and patriotism.
                  Transitioning from the battlefield to civilian life,
                   our mission is clear: to continue serving our beloved
                    country. We aim to empower fellow veterans and communities,
                     fostering unity and support for Israel's defense and prosperity.
                      Through strategic initiatives and partnerships, we make impactful 
                      contributions to our nation's security and stability.
                       Join us as we shape the future of Israel, guided by the values of courage,
                        sacrifice, and solidarity. Together, we stand strong,
                         united in our commitment to serve</p>
          </div>
          <a href="#token" className="btn btn-default btn-radius animation"
            data-animation="fadeInUp"
            data-animation-delay="1s" >Let's Donate <BsArrowRight/></a>
        </div>
      </div>
    </div>
  </section>
};

export default About;
