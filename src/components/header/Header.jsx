import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*==============change background header==============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*==============change background header==============*/

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#acceuil");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          HowardTech
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#acceuil"
                onClick={() => setActiveNav("#acceuil")}
                className={
                  activeNav === "#acceuil" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i>
                Acceuil
              </a>
            </li>

            <li className="nav_item">
              <a href="#à propos de" onClick={() => setActiveNav("#à propos de")}
                className={
                  activeNav === "#à propos de" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-user nav_icon"></i>À propos de
              </a>
            </li>

            <li className="nav_item">
              <a href="#compétences" onClick={() => setActiveNav("#compétences")}
                className={
                  activeNav === "#compétences" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-file-alt nav_icon"></i>
                Compétences
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-briefcase-alt nav_icon"></i>
                Préstations de service
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-scenery nav_icon"></i>
                Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
