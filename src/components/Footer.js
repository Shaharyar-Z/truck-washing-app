import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer-section">
        <div class="content">
          <div rt="" class="w-layout-grid footer-grid">
            <div class="footer-column">
              <div class="footer-title">contact</div>
              <p class="paragraph no-margin">admin@fleetex.com.au</p>
              <p class="paragraph no-margin">04 6888 58 96</p>
            </div>
            <div class="footer-column">
              <div class="footer-title">navigation</div>
              <a href="/services" class="footer-link">
                Services
              </a>
              <a href="/a-propos" class="footer-link">
                About
              </a>
              <a href="/contact" class="footer-link">
                Contact
              </a>
              <a href="/blog" class="footer-link">
                Pricing
              </a>
            </div>
            <div class="footer-column">
              <div class="footer-title">Social Networks</div>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                class="footer-link"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                class="footer-link"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066718791035"
                target="_blank"
                class="footer-link"
              >
                Linkedin
              </a>
            </div>
            <div class="footer-column">
              <div class="footer-title">sectors served</div>
              <p class="paragraph no-margin">
                Mobile Pressure Cleaning Specialists
              </p>
            </div>
          </div>
          <div class="w-layout-grid detail-footer-grid">
            <div class="detail-footer">
              <div class="text-detail-footer">
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
