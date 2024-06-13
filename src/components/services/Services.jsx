import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Préstation de services</h2>
      <span className="section__subtitle">Mes offres</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Site <br /> Vitrine personalisé
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            Voir Plus
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ui uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Site Vitrine</h3>
              <p className="services_modal-description">Développé sur-mesure</p>
              <p className="services_modal-text">Á partir de</p>
              <p className="services_modal-prix">1200€</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Charte graphique à partir d'une maquette
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Site responsive (adapté tous supports)
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Mise en place du contenu (textes & images)
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Mise en ligne du site</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Développements <br /> Mobiles
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            Voir Plus
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ui uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Développements Mobiles</h3>
              <p className="services_modal-description">Développé sur-mesure</p>
              <p className="services_modal-text">Á partir de</p>
              <p className="services_modal-prix">1800€</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Création charte graphique personnalisée
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    développement sous Android
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Mise en ligne sur play store
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Développements <br /> Spécifiques
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            Voir Plus
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ui uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">
                Développements Spécifiques
              </h3>
              <p className="services_modal-description">Me contacter</p>
              <p className="services_modal-text">Taux Journalier Moyen</p>
              <p className="services_modal-prix">250€/jour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
