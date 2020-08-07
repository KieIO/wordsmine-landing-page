import React from 'react'
import { useTranslation } from 'react-i18next'
import BannerVideo from '../../assets/video/Banner_Anim_color_blue.mp4';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import './Banner.scss';

const Banner = (props) => {
  const { t } = useTranslation()

  return (
      <section className="banner" id="banner" style={props.isCloseToolTip ? {marginTop: '6.9rem', transition: 'all .5s ease-in'} : {marginTop: '11.9rem'}}>
        <div className="banner__center">
          <h1 className="banner__text-color">{t('bannerTitle')}</h1>
          <div>
            <p className="banner__text-color description">{t('bannerDes1')}</p>
            <p className="banner__text-color description">{t('bannerDes2')}</p>
          </div>
          <div className="banner__btn">
            <ButtonLarge type="primary" >
              {t('bannerTryNowButton')}
            </ButtonLarge>
          </div>
        </div>
        <div className="banner__img">
          <video className="video" autoPlay loop muted>
            <source src={BannerVideo} type="video/mp4" />
          </video>
        </div>
      </section >
  );
}

export default Banner;