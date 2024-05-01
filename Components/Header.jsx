import React from "react";
import {BiMenu} from "react-icons/bi"


const Header = ({address , setAddress, connectWallet}) => {
  const menuList =[
    {
    name: "Home",
    link: "#"},
    {
      name: "Why",
      link: "#service"},
    {
      name: "About",
      link: "#about"},
    {
      name: "Token",
      link: "#token"},
    {
      name: "Team",
      link: "#team"},
    {
      name: "Contact",
      link: "#contact"}
    ]
  
  return  ( 
  <header className="header_wrap fixed-top">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a href="#home_section" 
          data-animation="fadeInDown"
          data-animation-delay="1s"
          className="navbar-brand page-scroll animation">
        <img src="assets/images/donating_logo1.png" style={{width:"150px"}} alt="logo" className="logo_light"/>
        <img src="assets/images/donating_logo1.png" style={{width:"150px"}} alt="logo" className="logo_dark" />
        </a>

       <button className="navbar-toggler animation" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-animation="fadeInDown"
                data-animation-delay="1.1s">
      <BiMenu/>
    
      </button>
      <div className="collapse navbar-collapse" id="#navbarSupportedContent">
      <ul className="navbar-nav m-auto">
          {menuList.map((menu, i) => (
            <li key={i + 1}
                className="animation"
                data-animation="fadeInDown"
                animation-delay={`1.${i + 1}s`}>
              <a href={menu.link} className="nav-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

          <ul className="navbar-nav nav_btn align-items-center">
            <li className="animation" 
                data-animation="fadeInDown"
                animation-delay="2s">
              { 
              address ? (
                <a className="btn btn-default btn-radius nav_item">
                  <small className="new-color">
                    {""}
                    {address.slice(0,15)}...
                  </small>
                </a>
              ) : (
                <a onClick={() => connectWallet()}
                className="btn btn-default btn-radius nav_item">
                  <small className="new-color">
                    {""}
                    Connect
                  </small>
                </a>
              )}
            </li>
          </ul>
      </div>

    </nav>
    </div>
  </header>
  )
};

export default Header;
