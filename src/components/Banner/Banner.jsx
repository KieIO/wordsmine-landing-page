import React from 'react'
import ImgBanner from '../../assets/img/banner.png'
import BannerGif from './Banner.gif';
import FormSignUpWithEmail from '../FormSignUpWithEmail/FormSignUpWithEmail';

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="banner__center">
        <h1 className="banner__text-color">Learn any words, be unstoppable!</h1>
        <div>
          <p className="banner__text-color description">The fastest way to learn vocabulary</p>
          <p className="banner__text-color description">From everywhere and everytime</p>
        </div>
        <FormSignUpWithEmail />
      </div>
      <div className="banner__img">
        {/* <img src={ImgBanner} alt="banner" /> */}
        <img src={BannerGif} alt="banner" />
      </div>
    </section >
  );
}

export default Banner;