import React from "react";
import "./FeedbackItem.scss";

const FeedbackItem = () => {
  return (
    <div className="feedback-item">
      <div className="feedback-item__description">
        {/* <span>"</span> */}
        <p>
          WordsMine! has helped me to understand just how fun and important and
          fun studying can be! This school year, in IELTS class I put my terms
          on WordsMine! and I already feel better about my upcoming test.
        </p>
        {/* <span>"</span> */}
      </div>
      <div className="feedback-item__info">
        <div className="feedback-item__name">Julien Ng, Ielts 8.0</div>
        {/* <p className="feedback-item__location">Vietnam</p> */}
      </div>
    </div>
  );
};

export default FeedbackItem;
