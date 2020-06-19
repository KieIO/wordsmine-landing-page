import React from 'react';


const TopicItem = ({name, img}) => {
    return (
        <section className="topic-item">
            <figure className="topic-item__figure">
                <img src={img} alt={name} className="topic-item__img"/>  
                <figcaption className="topic-item__caption">  
                <h3>
                    {name}
                </h3>  
                </figcaption>
            </figure>
        </section>
    );
}

export default TopicItem;