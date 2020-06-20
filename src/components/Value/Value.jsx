import React, { useState } from 'react'
import { Row, Col } from 'antd';
import ValueItem from './components/FeatureItem/ValueItem';


const Value = () => {
    const [feature] = useState([
        {
            icon: <span className="lnr lnr-rocket"></span>,
            title: 'Flexible',
            description: 'You can learn vocabulary every time and every where'
        },
        {
            icon: <span className="lnr lnr-eye"></span>,
            title: 'Visual',
            description: 'By using flashcard, you can remember new words easily '
        },
        {
            icon: <span className="lnr lnr-magic-wand"></span>,
            title: 'Effective',
            description: 'It is time-comsuming way to learn new words'
        },
        {
            icon: <span className="lnr lnr-users"></span>,
            title: 'Friendly',
            description: 'Easy to install and use with friendly interface'
        }
    ])
    return (
        <section className="value u-padding-horizontal-section u-margin-vertical-section" id="value">
            <Row justify="center" align="center">
           {
               feature.map(item => (
                   <Col key ={item.title} className="value__item" lg={6} md={12} sm={12}>
                       <ValueItem key={item.title} {...item} />
                   </Col>
               ))
           }
            </Row>   
        </section>
    );
}

export default Value;