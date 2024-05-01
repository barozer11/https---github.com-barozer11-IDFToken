import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";


const Contact = () => {
  return <section id="contact" className="contact_section small_pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 offset-lg-2">
          <div className="title-default_light title-border text-center">
          <h4 className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.2s" >Get In Touch</h4>
          </div>
        </div>
      </div>
      <div className="row align-item-center small_space">
        <div className="col-lg-4 col-md-6 offset-lg-2">
          <div className="bg_light_dark contact_box_s2_animation"
          data-animation="fadeInUp"
          data-animation-delay="0.2s">
            <div className="contact_title">
              <h5 className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"> Contact With Us</h5> 
                    <p className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s">
                    Make a difference and show your solidarity with the
                     brave warriors of the Israel Defense Force </p>
                  
            </div>
            <ul className="list_none contact_info mt-margin">
              <li className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s">
                    <i className="ion-ios-email"></i>
                    <div className="contact_detail">
                      <span>Address</span>
                      <p>Jerusalem</p>
                    </div>
                    </li>
                <li>
                <i className="ion-ios-email"></i>
                    <div className="contact_detail">
                      <span>Phone</span>
                      <p>054-67522643</p>
                    </div>
                  </li>
                <li>
                <i className="ion-ios-email"></i>
                    <div className="contact_detail">
                      <span>E-mail</span>
                      <p>DonatingIDF@gmail.com</p>
                    </div>
                  </li>
            </ul>

            <div className="contct_follow pt-2 pt-md-4">
              <span className="text-uppercase animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">Follow us</span>
            <ul className="list_none social_icon">
              <li className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s">
              <a href="#" className="icon_color"><FaFacebookF className="icon_color"/></a>
                    </li>
                <li>
                <a href="#" className="icon_color"><FaInstagram className="icon_color"/></a>
                  </li>
                <li>
                <a href="#" className="icon_color"><FaTwitter className="icon_color"/></a>
                  </li>
                  <li>
                <a href="#" className="icon_color"><FaYoutube className="icon_color"/></a>
                  </li>
            </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-6">
          <div className="pt-4 pt_md_0 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s">
            <form action="#" method="post"
            className="field_form"
            name="enq">
              <div className="form-group col-md-12 animation" 
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">
                      <input type="text" required placeholder="Enter Name" id="name" name="name"
                        className="form-control" />
                    </div>
                <div className="form-group col-md-12 animation" 
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">
                      <input type="text" required placeholder="Enter Email" id="email" name="email"
                        className="form-control" />
                    </div>
                <div className="form-group col-md-12 animation" 
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">
                      <input type="text" required placeholder="Enter Subject" id="subject" name="subject"
                        className="form-control" />
                    </div>
                 <div className="form-group col-md-12 animation" 
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">
                      <textarea type="text" required placeholder="Message" id="description" name="description"
                        className="form-control" role="2" />
                    </div>
                <div className="col-md-12 text-center animation" 
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s">
                      <button type="submit"
                      title="Submit Yout Message"
                      className="btn btn-default btn-radius btn-block"
                      id="submitButton"
                      name="submit"
                      value={"Submit"}>Submit <BsArrowBarRight/> </button>
                    </div>

                    <div className="col-md-12">
                      <div className="alert-msg text-center" id="alert"></div>
                    </div>
            </form>
                </div>
        </div>
      </div>
    </div>
  </section>
};

export default Contact;
