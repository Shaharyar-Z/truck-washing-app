import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nav = [
    {
      name: "services",
      href: "/services",
      class: "nav-link top w-nav-link",
    },
    {
      name: "about",
      href: "about-us",
      class: "nav-link w-nav-link",
    },
    {
      name: "contact",
      href: "contact-us",
      class: "nav-button",
    }
  ];
  return (
    <div>
      <div
        class="navbar w-nav"
      >
        <div class="nav-block">
          <div class="nav">
            <Link
              to="/"
              class="brand w-nav-brand w--current"
            >
              <img
                src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil.jpg"
                loading="lazy"
                alt=""
                class="logo"
              />
            </Link>
          </div>
          <div class="nav">
            <nav role="navigation" class="nav-menu w-nav-menu">
              {nav.map((navItem) => (
                <a href={navItem.href} class={navItem.class}>
                  <font
                    style={{
                      verticalAlign: "inherit",
                    }}
                  >
                    <font
                      style={{
                        verticalAlign: "inherit",
                      }}
                    >
                      {navItem.name}
                    </font>
                  </font>
                </a>
              ))}
            </nav>
            <div
              class="menu-button w-nav-button"
              style={{
                WebkitUserSelect: "text",
              }}
            >
              <div class="menu-icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    </div>
  );
};

export default Header;
