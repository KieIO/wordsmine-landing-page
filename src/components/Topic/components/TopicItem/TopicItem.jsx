import React from 'react';
import './TopicItem.scss';
import { useTranslation } from 'react-i18next';

const TopicItem = ({ name, img }) => {
    const { t } = useTranslation();

    return (
        <section className="topic-item">
            <figure className="topic-item__figure">
                <img src={img} alt={t(`${name}`)} className="topic-item__img" />
                <figcaption className="topic-item__caption">
                    <h3>
                        {t(`${name}`)}
                    </h3>
                </figcaption>
            </figure>
        </section>
    );
}

export default TopicItem;