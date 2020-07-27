import React from "react";
import { useTranslation } from 'react-i18next';
// import ImgValue1 from '../../img/value1.png'
// import ImgValue2 from '../../img/value2.png'

import "./Feature.scss";
import FeatureItem from "./FeatureItem/FeatureItem";
import Heading from "../Heading/Heading";

const Feature = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 1,
      img: "",
      content:
        `<strong>${t('featureSaveFromSelectionTitle')}</strong><p>${t('featureSaveFromSelectionDes')}</p>`,
    },
    {
      key: 2,
      img: "",
      content:
        `<strong>${t('featureSaveFromClipboardTitle')}</strong><p>${t('featureSaveFromClipboardDes')}</p>`,
    },
    {
      key: 3,
      img: "",
      content: `<strong>${t('featureCollectWordsFromMobileTitle')}</strong><p>${t('featureCollectWordsFromMobileDes')}</p>`,
    },
    {
      key: 4,
      img: "",
      content: `<strong>${t('featureFlashcardToLearnTitle')}</strong><p>${t('featureFlashcardToLearnDes')}</p>`,
    },
    {
      key: 5,
      img: "",
      content: `<strong>${t('featureLookupDefinitionTitle')}</strong><p>${t('featureLookupDefinitionDes')}</p>`,
    },
    {
      key: 6,
      img: "",
      content: `<strong>${t('featureCustomDefinitionTitle')}</strong><p>${t('featureCustomDefinitionDes')}</p>`,
    },
  ];

  return (
    <section
      className="feature u-padding-horizontal-section u-margin-vertical-section"
      id="feature"
    >
      <Heading>{t('featureTitle')}</Heading>
      <div className="content">
        {features.map((item) => (
          <FeatureItem key={item.key} img={item.img} content={item.content} />
        ))}
      </div>

      {/* <div className="feature__disflex">
                <div className="feature__img col-6">
                    <img src={ImgValue1} alt="feature" ></img>
                </div>
                <div className="col-6 feature__content-padding-left">
                    <h2>Your next win is just a fact away</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>
            </div>

            <div className="feature__disflex">
                <div className="col-6 feature__content-padding">
                    <h2>Don’t get frustrated. Get it done.</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>

                <div className="feature__img col-6">
                    <img src={ImgValue2} alt="feature" ></img>
                </div>
            </div> */}
    </section>
  );
};

export default Feature;
