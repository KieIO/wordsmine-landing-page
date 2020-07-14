import React from 'react';
import { Carousel } from 'antd';
import FeedbackItem from './components/Feedback-Item/FeedbackItem';
import './Feedback.scss';

const Feedback = () => {
    return (
        <section className="feedback u-padding-horizontal-section u-margin-vertical-section" id="testimonial">
            <Carousel dotPosition="bottom" className="feedback__carousel">
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
            </Carousel>
        </section>
    );
};

export default Feedback;