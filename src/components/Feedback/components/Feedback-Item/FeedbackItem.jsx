import React from 'react';
import './FeedbackItem.scss';

const FeedbackItem = () => {
    return (
        <div className="feedback-item">
            <div className="feedback-item__info">
                <h3 className="feedback-item__name">Goware</h3>
                <p className="feedback-item__location">Vietnam</p>
            </div>
            <div className="feedback-item__description">
                {/* <span>"</span> */}
                <p>Words, mine! has helped me to understand just how fun and important and fun studying can be! This school year, in chemistry class I put my terms on Words, mine! and I already feel better about my upcoming test.</p>
                {/* <span>"</span> */}

            </div>
        </div>
    );
};

export default FeedbackItem;