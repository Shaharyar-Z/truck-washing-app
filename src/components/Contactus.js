import React from "react";
import { Phone, Mail } from "lucide-react";
const Contactus = () => {
  return (
    <div>
      <div id="contact" className="section cta">
        <div className="content">
          <div className="cta-block">
            <img
              src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa67956_shape_06.svg"
              loading="lazy"
              alt=""
              className="shape _05"
            />
            <img
              src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa6794b_shape_05.svg"
              loading="lazy"
              alt=""
              className="shape _06"
            />
            <div className="cta-text">
              <div className="text-subtitle green centered">
                don't wait any longer
              </div>
              <h2 className="heading h2 cta">Contact us now!</h2>
              <div className="contact-us-sec">
                <div className="call">
                  <Phone /> <span>04 6888 58 96</span>
                </div>
                <div className="mail">
                  <Mail /> <span> admin@fleetex.com.au</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
