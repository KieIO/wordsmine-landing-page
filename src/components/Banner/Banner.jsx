import React from 'react'
import ImgBanner from '../../img/learning-online.jpg'
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
        <p className="banner__text-color description"></p>
        <FormSignUpWithEmail />
      </div>
      <div className="banner__img">
        <img src={ImgBanner} alt="banner" />
      </div>
    </section >
  );
}

export default Banner;