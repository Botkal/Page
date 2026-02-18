import React from "react";
import { useTranslation } from "react-i18next";
import { Jumbotron } from "./migration";

const AboutMe = ({ link, resume_hu, resume_en }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  const { t } = useTranslation();

  React.useEffect(() => {
    if (link) {
      setProfilePicUrl(link);
      setShowPic(true);
    } else {
      setShowPic(false);
    }
  }, [link]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-2 border-secondary-subtle rounded img-fluid"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
              src={profilePicUrl}
              alt="profilepicture"
              width={200}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">
            {t("about.heading")}
          </h2>
          <p className="lead text-center">
            {t("about.description")}
          </p>
          {(resume_hu || resume_en) && (
            <p className="lead text-center">
              {resume_hu && (
                <a
                  className="btn btn-outline-secondary mx-2 resume-btn"
                  href={resume_hu}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label={t("about.resumeHu")}
                >
                  {t("about.resumeHu")}
                </a>
              )}
              {resume_en && (
                <a
                  className="btn btn-outline-secondary mx-2 resume-btn"
                  href={resume_en}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label={t("about.resumeEn")}
                >
                  {t("about.resumeEn")}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;