import React from 'react'

const ValueItem = ({icon, title, description}) => {
    return ( 
        <section className="value-item">
            <div className="value-item__icon">
                {icon}
            </div>
            <h3 className="value-item__title">
                {title}
            </h3>
            <div className="value-item__description">
                {description}   
            </div>
        </section>
     );
}
 
export default ValueItem;