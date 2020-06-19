import React from 'react';
import { Carousel } from 'antd';
import FeedbackItem from './components/Feedback-Item/FeedbackItem';

const Feedback = () => {
    return (
        <section className="feedback">
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