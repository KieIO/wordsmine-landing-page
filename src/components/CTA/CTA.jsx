import React from 'react';
import FormSignUp from '../FormSignUp/FormSignUp';
import './CTA.scss';

const CTA = () => {
  return (
    <section className="cta u-margin-vertical-section u-padding-horizontal-section">
      <div className="cta__column cta__wrap">
        <h1 className="cta__title">Ready to start getting<br /> better grades?</h1>
        {/* <ButtonLarge>Get started</ButtonLarge> */}
      </div>
      <div className="cta__column">
        <FormSignUp />
      </div>

    </section>
  );
};

export default CTA;