import React from "react";
import TitleSections from "../../Components/TitleSection/TitleSection";
import data from "../../Content/Section2.json";
import { useSelector } from "react-redux";
import "./Sec2.css";
import img from "../../images/img3.png";
import { motion } from "framer-motion";
const Sec2 = () => {
  const language = useSelector((state) => state.language);

  // Récupère les information selon la langue actuelle
  const titre1 = data.titre1[language] || data.titre1.en;
  const desc = data.desc[language] || data.desc.en;
  const para_title = data.para_title[language] || data.para_title.en;
  const para_content = data.para_content[language] || data.para_content.en;
  return (
    <>
      <section className="pv" id="aboutme">
        <div className="container">
          <TitleSections title={titre1} desc={desc} />
          <div className="row row-about">
            <div className="col-lg-6 allC">
              <motion.img
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
                src={img}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <motion.div
                className="card card-n2"
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
              >
                <h3>{para_title} </h3>
                <p dangerouslySetInnerHTML={{ __html: para_content }}></p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec2;
