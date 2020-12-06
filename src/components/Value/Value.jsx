import React, { useState } from 'react'
import { Row, Col } from 'antd';
import ValueItem from './components/FeatureItem/ValueItem';
import './Value.scss'
import ImgStep1 from "../../img/step1.png";
import ImgStep2 from "../../img/step2.png";
import ImgFlashcard from "../../img/flashcard_mobile_hori.jpg";
import Dashboard from "../../img/dashboard.png";

const Value = () => {
  const [feature] = useState([
    {
      icon: <img src={ImgStep1} className="ValuePic"/>,
      title: 'valueConvenientTitle',
      description: 'valueConvenientDes'
    },
    {
      icon: <img src={ImgStep2} className="ValuePic"/>,
      title: 'valueCloudStorageTitle',
      description: 'valueCloudStorageDes'
    },
    {
      icon: <img src={ImgFlashcard} className="ValuePic"/>,
      title: 'valueFlashCardTitle',
      description: 'valueFlashCardDes'
    },
    {
      icon: <img src={Dashboard} className="ValuePic"/>,
      title: 'valueLexicographerTitle',
      description: 'valueLexicographerDes'
    }
  ])
  return (
    <section className="value u-padding-horizontal-section u-margin-vertical-section" id="value">
      <Row justify="center" align="center">
        {
          feature.map(item => (
            <Col key={item.title} className="value__item" lg={6} md={12} sm={12}>
              <ValueItem key={item.title} {...item} />
            </Col>
          ))
        }
      </Row>
    </section>
  );
}

export default Value;