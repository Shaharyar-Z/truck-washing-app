import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    {
      name: "contact",
      ref: "contact",
      className: "nav-button",
    },
  ];
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div className="navbar w-nav">
        <div className="nav-block">
          <div className="nav">
            <a href="/" className="brand w-nav-brand w--current">
              <img
                src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil.jpg"
                loading="lazy"
                alt="Logo"
                className="logo"
              />
            </a>
          </div>
          <div className="nav">
            {/* Navigation Menu */}
            <nav
              role="navigation"
              className={`nav-menu w-nav-menu ${menuOpen ? "open" : ""}`}
            >
              {nav.map((navItem) => (
                <a
                  href={`#${navItem.ref}`}
                  key={navItem.ref}
                  onClick={() => scrollToSection(navItem.ref)}
                  className={navItem.className}
                >
                  {navItem.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="menu-button w-nav-button" onClick={toggleMenu}>
              <div className="menu-icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>

        {/* Overlay for Mobile Menu */}
        {menuOpen && <div className="w-nav-overlay" onClick={toggleMenu}></div>}
      </div>

      {/* CSS for Open Menu */}
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
