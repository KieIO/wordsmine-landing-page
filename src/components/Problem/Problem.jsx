/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ButtonLarge from "../ButtonLarge/ButtonLarge";
import "./Problem.scss";
import { UserContext } from "../../contexts/user.context";
import { Link } from "react-router-dom";
import sadIcon from "../../img/sad.svg";
import problemPic from "../../img/problem.jpg";

const Problem = (props) => {
  const { t } = useTranslation();

  return (
    <section className="problem" id="problem">
      <div className="problem__img">
        <img src={problemPic} alt="Problem" />
      </div>
      <div className="problem__right">
        <h1 className="problem__text-color">
          {t("problemTitle")}
          &nbsp;
          <img src={sadIcon} alt="problem" width="30px;"></img>
        </h1>

        <div>
          <p className="problem__text-color description">{t("problemDes1")}</p>
          <p className="problem__text-color description">{t("problemDes2")}</p>
          <p className="problem__text-color description">{t("problemDes3")}</p>
          <p className="problem__text-color description">{t("problemDes4")}</p>
          <p className="problem__text-color description">{t("problemDes5")}</p>
        </div>
        <div className="problem__btn">
          <Link to="/register">
            <ButtonLarge type="primary">{t("problemTryNowButton")}</ButtonLarge>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Problem;
