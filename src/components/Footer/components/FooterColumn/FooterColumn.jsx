import React from 'react';

const FooterColumn = ({ title, data }) => {
    return (
        <div className="footer-column">
            <h4 className="footer-column__title">{title}</h4>
            <ul className="footer-column__list">
                {
                    data.map((item, index) => (
                        <li key={index} className="footer-column__link">
                            <a href={item.slug}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterColumn;