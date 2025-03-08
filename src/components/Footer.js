import React from "react";

const Footer = () => {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="footer-section">
        <div className="content">
          <div rt="" className="w-layout-grid footer-grid">
            <div className="footer-column">
              <div className="footer-title">contact</div>
              <p className="paragraph no-margin">admin@fleetex.com.au</p>
              <p className="paragraph no-margin">04 6888 58 96</p>
            </div>
            <div className="footer-column">
              <div className="footer-title">navigation</div>
              <a onClick={() => scrollToSection("services")} href="#services" className="footer-link">
                Services
              </a>
              <a onClick={() => scrollToSection("about")} href="#about" className="footer-link">
                About
              </a>
              <a onClick={() => scrollToSection("contact")} href="#contact" className="footer-link">
                Contact
              </a>
              <a onClick={() => scrollToSection("pricing")} href="#pricing" className="footer-link">
                Pricing
              </a>
            </div>
            <div className="footer-column">
              <div className="footer-title">Social Networks</div>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Linkedin
              </a>
            </div>
            <div className="footer-column">
              <div className="footer-title">sectors served</div>
              <p className="paragraph no-margin">
                Mobile Pressure Cleaning Specialists
              </p>
            </div>
          </div>
          <div className="w-layout-grid detail-footer-grid">
            <div className="detail-footer">
              <div className="text-detail-footer">
                All rights reserved. Fleetex © 2023.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
