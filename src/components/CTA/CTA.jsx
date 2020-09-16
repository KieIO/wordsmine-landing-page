import React from "react";
import FormSignUp from "../FormSignUp/FormSignUp";
import "./CTA.scss";
import { useTranslation } from "react-i18next";
import TimeCountDown from "./TimeCountDown/TimeCountDown";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta u-margin-vertical-section u-padding-horizontal-section">
      <div className="cta__column cta__wrap">
        <h1 className="cta__title">{t("ctaTitle")}</h1>
        <h2 className="cta__title">{t("ctaSubTitle")}</h2>
        <TimeCountDown />
        {/* <ButtonLarge>Get started</ButtonLarge> */}
      </div>
      <div className="cta__column">
        <FormSignUp />
      </div>
    </section>
  );
};

export default CTA;
