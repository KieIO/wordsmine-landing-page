import React, { useState } from 'react'
import { Row, Col } from 'antd';
import ValueItem from './components/FeatureItem/ValueItem';
import './Value.scss'

const Value = () => {
  const [feature] = useState([
    {
      icon: <span className="lnr lnr-users"></span>,
      title: 'valueConvenientTitle',
      description: 'valueConvenientDes'
    },
    {
      icon: <span className="lnr lnr-rocket"></span>,
      title: 'valueCloudStorageTitle',
      description: 'valueCloudStorageDes'
    },
    {
      icon: <span className="lnr lnr-eye"></span>,
      title: 'valueFlashCardTitle',
      description: 'valueFlashCardDes'
    },
    {
      icon: <span className="lnr lnr-magic-wand"></span>,
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