import React from "react";
import {
  Pickaxe,
  Truck,
  Factory,
  SprayCanIcon,
  LandPlot,
  Wind
} from "lucide-react";

const Services = () => {
  const services = [
    {
      heading: "Mining & Heavy Equipment Cleaning",
      description:
        "At Fleetex, we specialize in premium mobile high-pressure cleaning for mining and heavy machinery, eliminating tough grime, grease, and contaminants on-site. Our expert service minimizes downtime, extends equipment life, and boosts performance. Clean machines work better.",
      icon: <Pickaxe />,
    },
    {
      heading: "Truck & Fleet Washing",
      description:
        "Your fleet is your brand—keep it spotless with our convenient mobile truck and fleet washing. We come to you, removing road grime, grease, and contaminants with fast, eco-friendly, and compliance-ready cleaning. Keep your vehicles looking their best, anytime, anywhere.",
      icon: <Truck />,
    },
    {
      heading: "Commercial & Industrial Pressure Washing",
      description:
        "Enhance safety and curb appeal with Fleetex’s on-demand industrial-grade pressure washing. We bring our expertise to your site, removing dirt, mold, and stains from buildings, warehouses, and workspaces. A flawless, professional finish with maximum convenience.",
      icon: <Factory />,
    },
    {
      heading: "Graffiti Removal",
      description:
        "We eliminate graffiti fast with our rapid-response mobile service, using advanced techniques that remove paint without surface damage. Our team ensures your property looks clean and professional—no stains, no shadows, just results, right where you need them.",
      icon: <SprayCanIcon />,
    },
    {
      heading: "Concrete, Driveway & Surface Cleaning and Sealing",
      description:
        "Oil stains and grime don’t stand a chance. Our mobile high-pressure cleaning and degreasing restore driveways, walkways, and parking lots on-site, ensuring pristine, slip-free surfaces with zero hassle. Add on professional sealing options to enhance durability and protect against future stains and wear.",
      icon: <LandPlot />,
    },
    {
      heading: "Sterilisation & Heated Deep Cleaning",
      description:
        "We set the standard in mobile high-temperature sterilization. Using industrial steam and disinfectants, Fleetex eliminates bacteria, viruses, and contaminants at your location. Maximum hygiene with minimal disruption for medical, food, and high-traffic areas.",
      icon: <Wind />,
    },
  ];
  return (
    <div>
      <div id="services" className="section">
        <img
          src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa67947_shape_04.svg"
          loading="lazy"
          alt=""
          className="shape _01"
        />
        <div className="content">
          <div className="services-block">
            <div className="heading-block">
              <div className="heading-block-text">
                <div className="text-subtitle green">
                  leader in arboricultural work
                </div>
                <h2 className="heading h2">Services</h2>
              </div>
              <p className="paragraph">
                No matter what service you need, we are able to advise you and
                evaluate the whole package with you very quickly!
              </p>
            </div>
            <div className="services w-dyn-list">
              <div role="list" className="service-collection-cards w-dyn-items">
                {services.map((service, ind) => (
                  <div key={ind} role="listitem" className="service-card-item w-dyn-item">
                    <a
                      href="/services/abattage"
                      className="service-card w-inline-block"
                    >
                      {service.icon}
                      <div className="spacer _24"></div>
                      <h2 className="heading">{service.heading}</h2>
                      <p className="paragraph">{service.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
