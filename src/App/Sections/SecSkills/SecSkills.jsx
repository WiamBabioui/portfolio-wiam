import React from "react";
import TitleSections from "../../Components/TitleSection/TitleSection";
import { useSelector } from "react-redux";
import data from "../../Content/SecSkills.json";
import "./SecSkills.css";
import { motion } from "framer-motion";
const SecSkills = () => {
  const language = useSelector((state) => state.language);
  const titre1 = data.titre1[language] || data.titre1.en;
  const desc = data.desc[language] || data.desc.en;
  const skills = data.skills;
  return (
    <>
      <section className="pv" id="skills">
        <div className="container">
          <TitleSections title={titre1} desc={desc} />
          <div className="row justify-content-center">
            {skills?.map((i, key) => (
              <div className="col-lg-3 col-md-6 col-10 py-2 " key={key}>
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
                  className="card card-skills"
                >
                  <div className="card-header">
                    <i className={`${i.icon}  ${i.class}`}></i>{" "}
                    <span>{i.title[language] || i.title.en}</span>
                  </div>
                  <div className="card-body">
                    {i.content.map((i, key) => (
                      <div key={key}>
                        <p className={i.class}>
                          <i className={i.icon}></i> <span>{i.label}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecSkills;
