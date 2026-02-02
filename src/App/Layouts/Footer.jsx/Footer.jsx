import React from "react";
import logo from "../../images/logo27.png";
import "./footer.css";
const Footer = () => {
  const links = [
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/WiamBabioui",
    },
    {
      icon: "fa-solid fa-envelope",
      link: "mailto:babiouiwiam33@gmail.com",
    },
    {
      icon: "fa-solid fa-phone",
      link: "tel:0710427747",
    },
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/wiam-babioui-3003b2006w33/",
      
    },
  ];
  return (
    <footer id="footer">
      <div className="container">
        <div className="row allC">
          <div className="col-md-3 col-6">
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-md-6 col-7 pt-4">
            
            <p className="footer-text">
                © 2026 Made by{" "}
               <span className="name-gradient">WiamBabioui</span>{" "}
                 with <span className="heart">♥</span>. All rights reserved.
            </p>
          </div>
          <div className="col-md-3 col-7 link-icon-footer">
            {" "}
            {links?.map((i, index) => (
              <span key={index} className="">
                <a href={i.link}>
                  <i className={i.icon}></i>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
