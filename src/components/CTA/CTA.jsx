import React from 'react';
import FormSignUp from '../Form/Form';

const CTA = () => {
    return (
        <section className="cta u-margin-vertical-section u-padding-horizontal-section">
            <div className="cta__column cta__wrap">
                <h1 className="cta__title">Ready to start getting better grades?</h1>
                {/* <ButtonLarge>Get started</ButtonLarge> */}
            </div>
            <div className="cta__column">
                <FormSignUp />
            </div>
           
        </section>
    );
};

export default CTA;