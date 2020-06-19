import React, { useState } from 'react';
import { Row, Col } from 'antd';
import TopicItem from './TopicItem/TopicItem';
import Heading from '../Heading/Heading';


const Topic = () => {
    const [topic] = useState([
        {
            name: 'Home',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png'
        },
        {
            name: 'Home',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png'
        },
        {
            name: 'Home',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png'
        },
        {
            name: 'Other',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png'
        }
    ])
    return ( 
        <section className="topic u-padding-horizontal-section">
            <div className="topic__heading">
                <Heading>Give it try! Let's go!</Heading>
            </div>
            <Row justify="center" align="center">
                {
                    topic.map((item, index) => (
                        <Col key={index} className="topic__item" lg={6}>
                            <TopicItem key={index} key={item.title} {...item} />
                        </Col>
                    ))
                }
            </Row>  
        </section>
     );
}
 
export default Topic;