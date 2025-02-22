import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="section-hero">
        <div class="block-home-hero">
          <div class="hero">
            <div class="text-subtitle">PROFESSIONAL, SAFE, EFFICIENT.</div>
            <h1 class="heading-hero">Cleaning Services</h1>
            <div class="_2-button-block">
              <a href="/contact" class="tertiary-button w-button">
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
        <div class="hero-bottom-feature">
          <div class="w-layout-grid hero-column-grid">
            <div class="scroll-indicator-block">
              <div class="scroll-indicator">
                <div class="indicator-fill"></div>
              </div>
            </div>
            <div
              class="featured-block"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
