import React from 'react'
import ImgBanner from '../../img/learning-online.jpg'

import { Button} from 'antd';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__center">
            <div className="banner__space"></div>
                <h1 className="banner__text-color">Learn any words, be unstoppable</h1>
                <p className="banner__text-color"> Words beware, 1 at a time. Learning everywhere and evrytime with Words, mine!
                </p>
                <Button type="primary" shape="round" size="large" className="banner__button">
                    Get Started
                </Button>

            </div>

            <div className="banner__img">
                <img src={ImgBanner} alt="banner" />
            </div>
        </section>
    );
}

export default Banner;