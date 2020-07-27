import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

import './ChangeLanguage.scss';

const { Option } = Select;

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    return (
        <div className="change-language">
            <Select defaultValue="English" style={{ width: 120 }} onChange={handleChange}>
                <Option value="en">{t('footerEnglish')}</Option>
                <Option value="vn">{t('footerVietnamese')}</Option>
            </Select>
        </div>
    );
};

export default ChangeLanguage;