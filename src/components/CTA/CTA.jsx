import React from 'react';
import FormSignUp from '../FormSignUp/FormSignUp';
import './CTA.scss';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta u-margin-vertical-section u-padding-horizontal-section">
      <div className="cta__column cta__wrap">
        <h1 className="cta__title">{t('ctaTitle')}</h1>
        {/* <ButtonLarge>Get started</ButtonLarge> */}
      </div>
      <div className="cta__column">
        <FormSignUp />
      </div>

    </section>
  );
};

export default CTA;