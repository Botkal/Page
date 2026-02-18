import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

// 🟢 1. Importáld a fordítást
import { useTranslation } from "react-i18next";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  const { t, i18n } = useTranslation(); // 🟢 2. Használat

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  // 🟢 3. Nyelv váltó handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="d-flex w-100 justify-content-between">
          <Nav className="navbar-nav mr-auto">

            {about.show && (
              <NavLink
                className="nav-item lead"
                href={process.env.PUBLIC_URL + "/#aboutme"}
              >
                {t("navigation.about")}
              </NavLink>
            )}

            {repos.show && (
            <NavLink 
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              {t("navigation.projects")}
            </NavLink>
            )}

            {skills.show && (
              <NavLink
                className="nav-item lead"
                href={process.env.PUBLIC_URL + "/#skills"}
              >
                {t("navigation.skills")}
              </NavLink>
            )}
          </Nav>
          {/* 🟢 4. Nyelvválasztó */}
          <Nav className="ml-auto">
            <Nav.Link onClick={() => changeLanguage("en")}>EN</Nav.Link>
            <Nav.Link onClick={() => changeLanguage("hu")}>HU</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
