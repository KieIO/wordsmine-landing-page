import React from 'react'
import './ValueItem.scss'
import { useTranslation } from 'react-i18next';

const ValueItem = ({ icon, title, description }) => {
    const { t } = useTranslation()

    return (
        <section className="value-item">
            <div className="value-item__icon">
                {icon}
            </div>
            <h3 className="value-item__title">
                {t(`${title}`)}
            </h3>
            <div className="value-item__description">
                {t(`${description}`)}
            </div>
        </section>
    );
}

export default ValueItem;