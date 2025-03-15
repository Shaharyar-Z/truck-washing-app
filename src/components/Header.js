import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const nav = [
    {
      name: "services",
      ref: "services",
      className: "nav-link top w-nav-link",
    },
    {
      name: "about",
      ref: "about",
      className: "nav-link w-nav-link",
    },
  ];
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  const location = useLocation();
  React.useEffect(() => {
    console.log("Route changed to:", location.pathname);
    location.pathname === "/" ? setShowNav(true) : setShowNav(false);
  }, [location]);

  return (
    <div>
      <div className="navbar w-nav">
        <div className="nav-block">
          <div className="nav">
            <Link to="/" className="brand w-nav-brand w--current">
              <h2>Fleetex</h2>
              {/* <img
                src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil.jpg"
                loading="lazy"
                alt="Logo"
                className="logo"
              /> */}
            </Link>
          </div>
          {showNav && (
            <div className="nav">
              <nav
                role="navigation"
                className={`nav-menu w-nav-menu ${menuOpen ? "open" : ""}`}
              >
                {nav.map((navItem) => (
                  <a
                    // href={`#${navItem.ref}`}
                    key={navItem.ref}
                    onClick={() => scrollToSection(navItem.ref)}
                    className={navItem.className}
                  >
                    {navItem.name}
                  </a>
                ))}
                <Link to="/contact" key={"contact"} className={"nav-button"}>
                  contact
                </Link>
              </nav>

              <div className="menu-button w-nav-button" onClick={toggleMenu}>
                <div className="menu-icon w-icon-nav-menu"></div>
              </div>
            </div>
          )}
        </div>

        {menuOpen && <div className="w-nav-overlay" onClick={toggleMenu}></div>}
      </div>

      <style>
        {`
        
          .nav-menu.open {
            display: block;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: white;
            text-align: center;
            z-index: 100;
          }
          .menu-button {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
