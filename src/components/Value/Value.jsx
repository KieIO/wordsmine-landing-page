import React, { useState } from 'react'
import { Row, Col } from 'antd';
import ValueItem from './components/FeatureItem/ValueItem';
import './Value.scss'

const Value = () => {
  const [feature] = useState([
    {
      icon: <span className="lnr lnr-users"></span>,
      title: 'Convenient',
      description: 'Never miss new words you see everyday!'
    },
    {
      icon: <span className="lnr lnr-rocket"></span>,
      title: 'Cloud Storage',
      description: 'Collect and save vocabulary from any where, any time'
    },
    {
      icon: <span className="lnr lnr-eye"></span>,
      title: 'Flashcard',
      description: 'Testing your knowledge and being master with smart Flashcard mode'
    },
    {
      icon: <span className="lnr lnr-magic-wand"></span>,
      title: 'Lexicographer',
      description: 'Enrich your vocabulary bank 10x times'
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