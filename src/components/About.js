import React from "react";

const About = () => {
  return (
    <div id="about" className="section">
      <img
        src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa6794a_shape_02.svg"
        loading="lazy"
        alt=""
        className="shape _02"
      />
      <div className="content">
        <div className="w-layout-grid _2-column-grid">
          <div className="text-box _800px">
            <div className="text-subtitle green">about</div>
            <h2 className="heading h2">
              <span className="text-accent">
                The FASTEST
                <br />
              </span>
              service in the National Capital
            </h2>
            <p className="paragraph">
              Welcome to TREEZ Tree Services! We are a company specializing in
              arboriculture, dedicated to customer satisfaction. Whether for
              small or large jobs, our team of experts passionate about trees
              and with extensive experience in the field are here to meet all
              your tree maintenance and management needs.
            </p>
          </div>
          <div className="block-image">
            <img
              src="/images/graffiti-removal.jpg"
              loading="lazy"
              alt="of tree felling."
              className="image"
            />
            <div className="image-animation-trigger"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
