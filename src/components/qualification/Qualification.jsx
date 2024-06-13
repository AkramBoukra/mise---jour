import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Mon parcours personnel</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification"></i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification"></i>Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                 Titre professionel concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">Doranco</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Mars 2020 - Octobre 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">Atelier 164</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Octobre 2020 - Novembre 2020
                </div>
              </div>
            </div> */}

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">societe</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Maintenant
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">societe</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Maintenant
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">Atelier 164</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Octobre 2020 - Novembre 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Développement Mobile
                </h3>
                <span className="qualification_subtitle">Association</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Juin 2022 - Décembre 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              {/* <div>
                <h3 className="qualification_title">
                  Concepteur développeur d'application
                </h3>
                <span className="qualification_subtitle">societe</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar"></i>Maintenant
                </div>
              </div> */}

              {/* <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
