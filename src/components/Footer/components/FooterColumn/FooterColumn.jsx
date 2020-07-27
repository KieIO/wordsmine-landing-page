import React from 'react';
import { useTranslation } from 'react-i18next';

import './FooterColumn.scss';

const FooterColumn = ({ title, data }) => {
    const { t } = useTranslation();

    return (
        <div className="footer-column">
            <h4 className="footer-column__title">{t(`${title}`)}</h4>
            <ul className="footer-column__list">
                {
                    data.map((item, index) => (
                        <li key={index} className="footer-column__link">
                            <a href={item.slug}>{t(`${item.name}`)}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterColumn;