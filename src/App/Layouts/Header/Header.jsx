import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, updateTheme } from "../../Redux/Configuration/actions";
import { motion } from "framer-motion";
import logoDark from "../../images/logo27.png";
import logoLight from "../../images/logo27white.png";
import Menu from "../../SVGs/Menu";
import headerData from "../../Content/header.json";
import { Outlet } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const currentLinks = headerData.links_nav[language] || headerData.links_nav.en;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    console.log("Current language:", language);
  }, [language]);

  const toggleTheme = () => {
    dispatch(updateTheme(isDark ? "light" : "dark"));
  };

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
    dispatch(update(newLang));
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
              {/* Logo */}
              <motion.div className="col-lg-3 col-md-4 col-6 col1Nav">
                <a href="#home">
                  <img src={isDark ? logoDark : logoLight} alt="logo" className="header-logo" />
                </a>
              </motion.div>

              {/* Liens de navigation */}
              <motion.div
                className="col-md-7 col-6 col2Nav"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="navbar-nav">
                  {currentLinks.map((link, index) => (
                    <li className="nav-item" key={index}>
                      <a href={`#${link.id}`}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Langue + thème + menu */}
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

                <button className="theme-toggle-btn" onClick={toggleTheme} title="Changer le thème">
                  {isDark ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button>

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
