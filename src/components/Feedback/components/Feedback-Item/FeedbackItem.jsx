import React from 'react';

const FeedbackItem = () => {
    return (
        // <Col className="gutter-row feedback__row__item" xs={{ span: 12 }} lg={{ span: 6 }}>
        //     <Card className="gutter-row feedback__row__item__card" style={{ width: '100%' }}>
        //         <Meta
        //             avatar={
        //                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        //             }
        //             title="Dũng Võ"
        //             description="Words, mine! has helped me to understand just how fun and important and fun studying can be! "
        //         />
        //     </Card>
        // </Col>
        <div className="feedback__carousel__item">
            <div className="feedback__carousel__item__info">
                <h3 className="feedback__carousel__item__info__name">Dũng Võ</h3>
                <p className="feedback__carousel__item__info__location">Vietnam</p>
            </div>
            <div className="feedback__carousel__item__description">
                <p>Words, mine! has helped me to understand just how fun and important and fun studying can be! This school year, in chemistry class I put my terms on Words, mine! and I already feel better about my upcoming test.</p>
            </div>
        </div>
    );
};

export default FeedbackItem;