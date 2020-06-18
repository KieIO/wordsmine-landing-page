import React from 'react';
import { Button } from 'antd';

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta__wrap">
                <h1 className="cta__wrap__title">Ready to start getting better grades?</h1>
                <Button size="large" className="cta__wrap__button">Get started</Button>
            </div>
        </section>
    );
};

export default CTA;