import React from "react";
import TitleSections from "../../Components/TitleSection/TitleSection";
import { useSelector } from "react-redux";
import data from "../../Content/SecServices.json";
import "./SecServices.css";
import { motion } from "framer-motion";
const SecServices = () => {
  const language = useSelector((state) => state.language);
  const titre1 = data.titre1[language] || data.titre1.en;
  const desc = data.desc[language] || data.desc.en;
  const services = data.services;
  return (
    <>
      <section className="pv" id="services">
        <div className="container">
          <TitleSections title={titre1} desc={desc} />
          <div className="row justify-content-center">
            {services?.map((item, key) => (
              <motion.div
                initial={{
                  opacity: 0,
                  // scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  // scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className="col-lg-3 col-md-6 col-10 py-2"
                key={key}
              >
                <div className="card card-service">
                  <i className={item.icon}></i>
                  <h4> {item.label[language] || item.label.en} </h4>
                  <p> {item.description[language] || item.description.en} </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecServices;
