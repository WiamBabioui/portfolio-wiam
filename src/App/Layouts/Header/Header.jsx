import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/Configuration/actions";
import { motion } from "framer-motion";
import logo from "../../images/logo27.png";
import Menu from "../../SVGs/Menu";
import headerData from "../../Content/header.json";
import { Outlet } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);

  // Récupère les liens de navigation selon la langue actuelle
  const currentLinks = headerData.links_nav[language] || headerData.links_nav.en;

  useEffect(() => {
    console.log(language);
  }, [language]);

  const toggleMenu = () => {
    const navLink = document.getElementsByClassName("col2Nav")[0];
    if (isOpen) {
      navLink.setAttribute("id", "navLinks");
      setIsOpen(false);
    } else {
      navLink.removeAttribute("id");
      setIsOpen(true);
    }
  };

  const handleChangeLanguage = (newLang) => {
    dispatch(update(newLang)); // Change la langue dans le store
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm w-100">
          <div className="container">
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="row align-items-center w-100"
            >
              <motion.div className="col-lg-3 col-md-4 col-6 col1Nav">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </motion.div>
              <motion.div
                className="col-md-7 col-6 col2Nav"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="navbar-nav">
                  {currentLinks.map((link, index) => {
                    const linkHref = link.replace(
                      /\s+/g,
                      ""
                    );
                    return (
                      <li className="nav-item" key={index}>
                        <a href={`#${linkHref}`}>
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
              <div className="col-lg-2 col-md-8 col-6 col3Nav">
                <div className="languages-change">
                  <p
                    onClick={() => handleChangeLanguage("fr")}
                    className={language === "fr" ? "active-lang" : ""}
                  >
                    FR
                  </p>
                  <span> </span>
                  <p
                    onClick={() => handleChangeLanguage("en")}
                    className={language === "en" ? "active-lang" : ""}
                  >
                    ENG
                  </p>
                </div>

                <button className="btn" onClick={toggleMenu}>
                  <Menu />
                </button>
              </div>
            </motion.div>
          </div>
        </nav>
      </header>
      <Outlet />
     </>
  );
}
