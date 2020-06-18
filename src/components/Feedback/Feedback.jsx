import React from 'react';
import { Carousel } from 'antd';
import FeedbackItem from './components/Feedback-Item/FeedbackItem';

const Feedback = () => {
    return (
        <section className="feedback">
            {/* <Row className="feedback__row" gutter={[16, 24]} justify="space-between" style={{ marginLeft: 0, marginRight: 0 }}>
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
            </Row> */}
            <Carousel dotPosition="bottom" className="feedback__carousel" autoplay>
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
            </Carousel>
        </section>
    );
};

export default Feedback;