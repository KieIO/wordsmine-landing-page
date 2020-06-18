import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';

// IMPORT IMAGES
import mobileImage from '../../assets/img/mobile.png';
import appStore from '../../assets/img/app-store.png';
import chPlay from '../../assets/img/ch-play.png';
import appdownload1 from '../../assets/img/appdownload-1.jpg';
import appdownload2 from '../../assets/img/appdownload-2.jpg';
import appdownload3 from '../../assets/img/appdownload-3.png';
import appdownload4 from '../../assets/img/appdownload-4.jpg';
import appdownload5 from '../../assets/img/appdownload-5.jpg';
import appdownload6 from '../../assets/img/appdownload-6.png';
import background1 from '../../assets/img/background1.png';
import background2 from '../../assets/img/background2.png';
import background3 from '../../assets/img/background3.png';

const AppDownload = () => {
    return (
        <section className="app-download">
            <Row className="app-download__row" gutter={[16, 24]}>
                <Col className="app-download__row__item__left" xs={{ span: 24 }} lg={{ span: 12 }} >
                    <div className="app-download__row__item__left__wrap">
                        <h2>Take your learning with you</h2>
                        <div className="app-download__row__item__left__wrap__download">
                            <a className="app-store" href="#">
                                <img src={appStore} />
                            </a>
                            <a className="ch-play" href="#">
                                <img src={chPlay} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col className="app-download__row__item__right" xs={{ span: 24 }} lg={{ span: 12 }} >
                    <div className="app-download__row__item__right__wrap">
                        <Carousel className="app-download__row__item__right__wrap__mobile" autoplay>
                            <img className="app-download__row__item__right__wrap__mobile__background" src={background1} />
                            <img className="app-download__row__item__right__wrap__mobile__background" src={background2} />
                            <img className="app-download__row__item__right__wrap__mobile__background" src={background3} />
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </section >
    );
};

export default AppDownload;