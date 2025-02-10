import React from "react";

const Header = () => {
  return (
    <div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        data-doc-height="1"
        role="banner"
        class="navbar w-nav"
      >
        <div class="nav-block">
          <div class="nav">
            <a
              href="/"
              aria-current="page"
              class="brand w-nav-brand w--current"
              aria-label="home"
            >
              <img
                src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 40px, 50px"
                srcset="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil-p-500.jpg 500w, https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil-p-800.jpg 800w, https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668f1950df97fea941538e_treez%20photo%20profil.jpg 1280w"
                alt=""
                class="logo"
              />
            </a>
          </div>
          <div class="nav">
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a href="/services" class="nav-link top w-nav-link">
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
                    services
                  </font>
                </font>
              </a>
              <a href="/a-propos" class="nav-link w-nav-link">
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
                    About
                  </font>
                </font>
              </a>
              <a href="/blog" class="nav-link w-nav-link">
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
                    blog
                  </font>
                </font>
              </a>
              <a href="/contact" class="nav-button">
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
                    get a quote
                  </font>
                </font>
              </a>
            </nav>
            <div
              class="menu-button w-nav-button"
              style={{
                WebkitUserSelect: "text",
              }}
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
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
