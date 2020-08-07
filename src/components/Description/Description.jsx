import React from "react";
import ImgDes1 from "../../img/flashcard.jpg";
import "./Description.scss";
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t } = useTranslation()

  return (
    <section className="description u-padding-horizontal-section" id="overview">
      <div className="description__content-padding">
        {/* <h2>Fit your learning <br />into your busy day</h2> */}
        <h2>
          {t('descriptionTitle')}
          <br />
        </h2>
        <p className="description__definition">
          {t('descriptionDes')}
        </p>
      </div>

      <div className="description__img">
        <img src={ImgDes1} alt="banner"></img>
      </div>
    </section>
  );
};

export default Description;
