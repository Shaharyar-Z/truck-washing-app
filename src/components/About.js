import React from "react";
// import {graffitiRemoval} from "/images/graffiti-removal.jpg"

const About = () => {
  return (
    <div>
      <div id="About" class="section">
        <img
          src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa6794a_shape_02.svg"
          loading="lazy"
          alt=""
          class="shape _02"
        />
        <div class="content">
          <div class="w-layout-grid _2-column-grid">
            <div class="text-box _800px">
              <div class="text-subtitle green">about</div>
              <h2 class="heading h2">
                <span class="text-accent">
                  The FASTEST
                  <br />
                </span>
                service in the National Capital
              </h2>
              <p class="paragraph">
                Welcome to TREEZ Tree Services! We are a company specializing in
                arboriculture, dedicated to customer satisfaction. Whether for
                small or large jobs, our team of experts passionate about trees
                and with extensive experience in the field are here to meet all
                your tree maintenance and management needs.
              </p>
            </div>
            <div class="block-image">
              <img
                src="/images/graffiti-removal.jpg"
                loading="lazy"
                alt="Image of tree felling."
                class="image"
              />
              <div class="image-animation-trigger"></div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default About;
