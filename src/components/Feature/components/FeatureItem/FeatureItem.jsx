import React from 'react'

const FeatureItem = ({icon, title, description}) => {
    return ( 
        <section className="feature-item">
            <div className="feature-item__icon">
                {icon}
            </div>
            <h3 className="feature-item__title">
                {title}
            </h3>
            <div className="feature-item__description">
                {description}   
            </div>
        </section>
     );
}
 
export default FeatureItem;