import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="section-hero">
        <div className="block-home-hero">
          <div className="hero">
            <div className="text-subtitle">PROFESSIONAL, SAFE, EFFICIENT.</div>
            <h1 className="heading-hero">Cleaning Services</h1>
            <p className="hero-bio">
              At FLEETEX, we don't just wash-we restore. Your fleet, your
              property, your equipment deserves a clean that lasts. With heated
              pressure washing, we strip away the toughest grime, so you don't
              have to. Because clean isn't just a look-it's your reputation.
            </p>
            <div className="_2-button-block">
              <Link to="/contact" className="tertiary-button w-button">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom-feature">
          <div className="w-layout-grid hero-column-grid">
            <div className="scroll-indicator-block">
              <div className="scroll-indicator">
                <div className="indicator-fill"></div>
              </div>
            </div>
            <div className="featured-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
