import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="à propos de">
      <h2 className="section__title">Á propos de moi</h2>
      <span className="section__subtitle">Mon indrotuction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Mon métier est simple : je crée votre site Internet et développe vos
            applications. Plusieur année d'expérience dans le web en tant que
            concépteur développeur d'applications. Bienvenue sur mon site personnel de
            concépteur développeur d'applications indépendant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
