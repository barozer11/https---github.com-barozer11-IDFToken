import React from "react";
import {BsCurrencyBitcoin, BsArrowRight} from "react-icons/bs"
import {FaEthereum} from 'react-icons/fa'
import {SiRipple, SiLitecoin} from "react-icons/si"
import {AiOutlineCloudDownload} from "react-icons/ai"



const Banner = ({transferNativeToken}) => {
  return <section id="home_section" 
                  className="section_banner bg_black_dark"
                  data-z-index="1"
                  data-parallax="scroll"
                  data-image-src="asstes/images/banner_bg2.png">

            <div className="banner_effect"> </div>
              <div className="container">
                <div className="row align-item-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                    <div className="banner_text_s2 text_md_center">
                      <h1 className="animation text-white"
                          data-animation="fadeInUp"
                          data-animation-delay="1.1s"><strong> Join</strong> us in supporting the brave men and women of the Israel Defense Force as
                           they safeguard their nation's peace and security. 
                           Every day, these courageous warriors stand firm against
                            threats to ensure the safety of their fellow citizens and 
                            uphold the values of <strong>freedom and democracy</strong></h1>
                          <h5 className="animation presale_text text-white"
                              data-animation="fadeInUp"
                              data-animation-delay="1.3s">Token Donating is <mark className="gradient_box"> live</mark></h5>
                          <div className="btn_group pt-2 pb-3 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="1.1s">
                            <a href="#whitepaper" className="btn btn-default btn-radius nav-link content-popup">
                              Hear More
                              <BsArrowRight/>
                            </a>
                            <a href="#token" className="btn btn-border btn-radius">
                              Buy Token Now! <BsArrowRight/>
                            </a>
                            <a onClick={()=> transferNativeToken()} className="btn btn-border btn-radius">
                              Transfer Token <BsArrowRight/>
                            </a>
                                </div>

                          <span className="text-white icon_title animation"
                                data-animation="fadeInUp"
                                data-animation-delay="1.4s"> We accept:</span>
                                <ul className="list_none currency_icon">
                                  <li className="animation"
                                      data-animation="fadeInUp"
                                      data-animation-delay="1.5s">
                                        <span className="new_icon_style"><BsCurrencyBitcoin/></span>   
                                        <span>Bitcoin</span>           
                                       
                                  </li>
                                  <li className="animation"
                                      data-animation="fadeInUp"
                                      data-animation-delay="1.5s">
                                        <span className="new_icon_style"><FaEthereum/></span>   
                                        <span>Ethereum</span>           
                                       
                                  </li>
                                  <li className="animation"
                                      data-animation="fadeInUp"
                                      data-animation-delay="1.5s">
                                        <span className="new_icon_style"><SiLitecoin/></span>   
                                        <span>LiteCoin</span>           
                                       
                                  </li>
                                  <li className="animation"
                                      data-animation="fadeInUp"
                                      data-animation-delay="1.5s">
                                        <span className="new_icon_style"><SiRipple/></span>   
                                        <span>Ripple</span>           
                                       
                                  </li>

                                </ul>
                            <div className="team_pop mfp-hide" id="whitepaper">
                              <div className="row m-0">
                                <div className="col-md-7">
                                  <div className="pt-3 pb-3">
                                    <div className="title_dark title_border">
                                      <h4>Come And Be A Part Of Us</h4>
                                      <p>we're dedicated to providing unwavering support
                                         to the IDF warriors who selflessly protect
                                          Israel's borders. Your donation plays a crucial 
                                          role in equipping them with the resources and training 
                                          they need to face any challenge with resilience and strength.</p>
                                          <p> <strong>Protecting Peace: </strong>
                                              Your contribution directly aids in maintaining 
                                              stability and peace in the region, fostering a
                                              safer future for all.</p>
                                              <p> <strong>Empowering Heroes: </strong>
                                              By supporting the IDF, you're empowering
                                              real-life heroes who sacrifice their 
                                              comfort and safety for the greater good.</p>
                                              <p> <strong>Preserving Values: </strong>
                                              Join a community committed to
                                              upholding the values of freedom,
                                              democracy, and justice in the face of adversity.</p>
                                      
                                      {/* <a href="#" className="btn-default btn-radius">Download Now <AiOutlineCloudDownload/></a> */}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="col-md-3">
                                  <img src="assets/images/idf_logo.png" alt="" className="pt-3 pb-3" />
                                </div>    
                              </div>
                            </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                    <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
                          data-animation="fadeInRight"
                          data-animation-delay="1.5s">
                            <img src="assets/images/idf_logo.png" alt="banner2" className="new_image_css"/>

                          </div>
                  </div>

                </div>
              </div>
           
        </section>
};

export default Banner;
