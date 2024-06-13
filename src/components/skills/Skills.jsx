import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="compétences">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Mon niveau de compétences</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
