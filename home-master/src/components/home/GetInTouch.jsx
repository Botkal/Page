import React from "react";
import { useTranslation } from "react-i18next";

const GetInTouch = ({ email }) => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="display-4 pb-3 text-center">{t("Contact.heading")}</h2>
      <p className="lead text-center pb-3">
        {t("Contact.message")},{" "}
        <a className="text-decoration-none" href={`mailto:${email}`}>
          {email}
        </a>.
      </p>
    </>
  );
};

export default GetInTouch;
