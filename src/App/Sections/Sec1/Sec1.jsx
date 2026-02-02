import React from "react";
import { useSelector } from "react-redux";
import sec1Data from "../../Content/Section1.json";
import "./Sec1.css";
import cv from "../../images/cv3.pdf";
import { motion } from "framer-motion";
const Sec1 = () => {
  const language = useSelector((state) => state.language);

  // Récupère les information selon la langue actuelle
  const titre1 = sec1Data.titre1[language] || sec1Data.titre1.en;
  const btn_contact = sec1Data.contact_btn[language] || sec1Data.contact_btn.en;
  const btn_cv = sec1Data.btn_cv[language] || sec1Data.btn_cv.en;

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
    <>
      <section className="sec1" id="home">
        <div className="container">
          <div className="row allCc">
            <div className="col-md-7">
              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="m-0"
                dangerouslySetInnerHTML={{ __html: titre1 }}
              ></motion.h1>
            </div>
          </div>
          <div className="row allC py-4">
            <div className="col-md-7 allC gap-3">
              {links?.map((i, index) => (
                <span key={index} className="link-icon">
                  <a href={i.link}>
                    <motion.i
                      // animate={{ y: [+5, -5, +5] }}
                      // transition={{
                      //   duration: 0.9,
                      //   repeat: Infinity,
                      //   repeatType: "loop",
                      //   ease: "easeInOut",
                      // }}
                      className={i.icon}
                    ></motion.i>
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div className="row allC gap-2">
            <div className="col-md-4 col-btns-sec1">
              <a href="#formc" className="btn_contact">
                {btn_contact} <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-md-4 col-btns-sec1">
              <a href={cv} target="__blank" className="btn_cv">
                {btn_cv} <i class="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec1;
