import React from 'react';
import img from '../../../assets/img/banner.png'
import './FeatureItem.scss';

const FeatureItem = ({content}) => {
    return (
        <div className="feature-item">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: content }} />

        </div>
    );
};

export default FeatureItem;