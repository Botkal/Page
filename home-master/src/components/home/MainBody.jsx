import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, firstName, middleName, lastName, icons }, ref) => {
    const { t, i18n } = useTranslation();

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
            <h1 ref={ref} className="display-1">
              {i18n.language === "hu" ? (
                <>
                  <strong>{firstName}</strong> {middleName} {lastName}
                </>
              ) : (
                <>
                  {lastName} {middleName} <strong>{firstName}</strong>
                </>
              )}
            </h1>
          <Typist key={i18n.language}>
            <div className="lead typist">{t("main.message")}</div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image} fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label={t("main.moreAria")}
          >
            {t("main.moreButton")}
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
