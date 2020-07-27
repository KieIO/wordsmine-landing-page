import React from "react";
import "./FeedbackItem.scss";
import { useTranslation } from 'react-i18next';

const FeedbackItem = () => {
  const { t } = useTranslation();

  return (
    <div className="feedback-item">
      <div className="feedback-item__description">
        {/* <span>"</span> */}
        <p>
          {t('testimonialContent')}
        </p>
        {/* <span>"</span> */}
      </div>
      <div className="feedback-item__info">
        <div className="feedback-item__name">{t('testimonialName')}</div>
        {/* <p className="feedback-item__location">Vietnam</p> */}
      </div>
    </div>
  );
};

export default FeedbackItem;
