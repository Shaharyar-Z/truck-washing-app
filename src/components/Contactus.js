import React from "react";
import ContactUs from "../ContactUs";

const Contactus = () => {
  return (
    <div>

      <div id="Contact" class="section cta">
        <div class="content">
          <div class="cta-block">
            <img
              src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa67956_shape_06.svg"
              loading="lazy"
              alt=""
              class="shape _05"
            />
            <img
              src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa6794b_shape_05.svg"
              loading="lazy"
              alt=""
              class="shape _06"
            />
            <div class="cta-text">
              <div class="text-subtitle green centered">
                don't wait any longer
              </div>
              <h2 class="heading h2 cta">Contact us now!</h2>
              <a href="/contact" class="primary-button cta w-button">
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
