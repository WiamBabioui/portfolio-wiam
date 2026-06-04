import React from "react";
import TitleSections from "../../Components/TitleSection/TitleSection";
import { useSelector } from "react-redux";
import data from "../../Content/SecWorks.json";
import "./WorksSec.css";
import { motion } from "framer-motion";

const WorksSec = () => {
  const language = useSelector((state) => state.language);
  const titre1 = data.titre1[language] || data.titre1.en;
  const desc = data.desc[language] || data.desc.en;
  const works = data.works;

  return (
    <section className="pv" id="works">
      <div className="container">
        <TitleSections title={titre1} desc={desc} />
        <div className="row justify-content-center">
          {works.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-10 py-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card card-works"
              >
                {/* Carousel */}
                <div
                  id={`carousel-${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.imgs.map((img, imgIndex) => (
                      <div
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                        key={imgIndex}
                      >
                        <div
                          className="d-block w-100 carousel-bg hsdgfsdgh"
                          style={{
                            height: "150px",
                            backgroundImage: `url(${img})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem",
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  {project.imgs.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>

                {/* Corps */}
                <div className="card-body d-flex flex-column">
          
                  <h5 className="card-title">
                    {project.title[language] || project.title.en}
                  </h5>
                  <p>
                    {project.description[language] || project.description.en}
                  </p>
                  <div className="container-outils-cars-works">
                    {project.technologies.map((i, key) => (
                      <div key={key}>
                        <p className={i.class}>
                          <i className={i.icon}></i> <span>{i.label}</span>
                        </p>
                      </div>
                    ))}
                  </div >

                  {/* Bouton visiter le site */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-visit-site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      {language === "fr" ? "Visiter le site" : "Visit site"}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSec;