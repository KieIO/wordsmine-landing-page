import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Heading from '../Heading/Heading';
import TopicItem from './components/TopicItem/TopicItem'


const Topic = () => {
    const [topic] = useState([
        {
            name: 'Science',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/science.0262b9325450ec3.png'
        },
        {
            name: 'Math',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/math.6b55cceab6d81db.png'
        },
        {
            name: 'Education',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/social_science.f080e4570fd49e2.png'
        },
        {
            name: 'Other',
            img: 'https://assets.quizlet.com/a/i/homepage/topics/other.67db08f4bd869cc.png'
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
                            <TopicItem  {...item} />
                        </Col>
                    ))
                }
            </Row>  
        </section>
     );
}
 
export default Topic;