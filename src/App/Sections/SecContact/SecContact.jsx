import React, { useRef } from "react";
import "./SecContact.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TitleSections from "../../Components/TitleSection/TitleSection";
import data from "../../Content/SecContact.json";
import emailjs from "@emailjs/browser";

const SecContact = () => {
  const language = useSelector((state) => state.language);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const titre = data.titre1[language] || data.titre1.en;
  const desc = data.desc[language] || data.desc.en;
  const para = data.para[language] || data.para.en;
  const nom = data.nom;
  const email = data.email;
  const message = data.message;
  const btnSend = data.btn_send[language] || data.btn_send.en;

  const links = [
    { icon: "fa-brands fa-github", link: "https://github.com/WiamBabioui" },
    { icon: "fa-solid fa-envelope", link: "mailto:babiouiwiam33@gmail.com" },
    { icon: "fa-solid fa-phone", link: "tel:0710427747" },
    { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/wiam-babioui-3003b2006w33/" },
  ];

  const handleform = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value.trim();
    const emailValue = emailRef.current.value.trim();
    const messageValue = messageRef.current.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid =
      nameValue !== "" &&
      emailValue !== "" &&
      messageValue !== "" &&
      emailRegex.test(emailValue);

    if (isValid) {
      // Envoyer avec EmailJS
      emailjs.send(
        "service_1y2f21g",
        "template_yi1zalr",
        {
          from_name: nameValue,
          from_email: emailValue,
          message: messageValue,
        },
        "WdFqMWylUEzLb-g6v"
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!",
          showConfirmButton: false,
          timer: 2000,
          background: "#292f36",
          color: "#fff",
        });
        document.getElementsByTagName("form")[0].reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: language === "fr" ? "Erreur lors de l'envoi. Réessayez." : "Failed to send. Please try again.",
          background: "#292f36",
          color: "#fff",
        });
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: language === "fr" ? "Veuillez remplir tous les champs correctement !" : "Please fill in all fields correctly!",
        background: "#292f36",
        color: "#fff",
      });
    }
  };

  return (
    <section className="pv" id="contact">
      <div className="container">
        <TitleSections title={titre} desc={desc} />
        <div className="row allC">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-md-5"
          >
            <h5 className="pb-3" dangerouslySetInnerHTML={{ __html: para }} />
            <div className="heuzhfub">
              {links.map((i, index) => (
                <span key={index} className="link-icon">
                  <a href={i.link} target="_blank" rel="noopener noreferrer">
                    <i className={i.icon}></i>
                  </a>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-md-7"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form className="formContact" id="formc">
              <div className="row-form">
                <div className="form-group">
                  <label htmlFor="name">{nom.label[language]}</label>
                  <input
                    type="text"
                    id="name"
                    placeholder={nom.placeholder[language]}
                    ref={nameRef}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{email.label[language]}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={email.placeholder[language]}
                    ref={emailRef}
                  />
                </div>
              </div>
              <div className="divTexterea">
                <div className="form-group">
                  <label htmlFor="message">{message.label[language]}</label>
                  <textarea
                    id="message"
                    placeholder={message.placeholder[language]}
                    ref={messageRef}
                  ></textarea>
                </div>
              </div>
              <div className="form-group allC">
                <button id="send" onClick={handleform}>
                  {btnSend} <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecContact;