import React, { useState } from "react";
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

  const [clickedBadge, setClickedBadge] = useState(null);

  const handleBadgeClick = (badgeKey) => {
    setClickedBadge(badgeKey);
    setTimeout(() => setClickedBadge(null), 600);
  };

  return (
    <section className="pv" id="skills">
      <div className="container">
        <TitleSections title={titre1} desc={desc} />
        <div className="row justify-content-center g-4">
          {skills?.map((i, key) => (
            <div className="col-lg-4 col-md-6 col-12" key={key}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: key * 0.1 }}
                className="card card-skills"
              >
                <div className="card-header">
                  <div className={`skill-icon-wrap ${i.class}`}>
                    <i className={i.icon}></i>
                  </div>
                  <span>{i.title[language] || i.title.en}</span>
                </div>
                <div className="skill-divider"></div>
                <div className="card-body">
                  {i.content.map((item, key2) => {
                    const badgeKey = `${key}-${key2}`;
                    const isClicked = clickedBadge === badgeKey;
                    return (
                      <motion.div
                        key={key2}
                        className={`skill-badge ${item.class}`}
                        onClick={() => handleBadgeClick(badgeKey)}
                        style={{ cursor: "pointer" }}
                        animate={
                          isClicked
                            ? {
                                y: [0, -30, 0, -15, 0],
                                scale: [1, 1.3, 0.9, 1.1, 1],
                                rotate: [0, -10, 10, -5, 0],
                                boxShadow: [
                                  "0 0 0px #ff2f7d",
                                  "0 0 20px #ff2f7d",
                                  "0 0 10px #ff2f7d",
                                  "0 0 5px #ff2f7d",
                                  "0 0 0px #ff2f7d",
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecSkills;