import React from 'react';
import { Row, Col } from 'antd';
import mobileImage from '../../assets/img/mobile.png';
import appStore from '../../assets/img/app-store.png';
import chPlay from '../../assets/img/ch-play.png';

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
                        <div className="app-download__row__item__right__wrap__mobile">
                            <img src={mobileImage} />
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default AppDownload;