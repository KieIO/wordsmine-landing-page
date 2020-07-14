import React from 'react'
import BannerVideo from '../../assets/video/Banner_Anim_color_blue.mp4';
import FormSignUpWithEmail from '../FormSignUpWithEmail/FormSignUpWithEmail';
import './Banner.scss';

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
        <video className="video" src={BannerVideo} autoPlay loop></video>
      </div>
    </section >
  );
}

export default Banner;