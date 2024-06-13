import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">2 années de travail</span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Complete</h3>
        <span className="about_subtitle">4 + projets</span>
      </div>

      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">En ligne 24/7</span>
      </div>
    </div>
  );
};

export default Info;
