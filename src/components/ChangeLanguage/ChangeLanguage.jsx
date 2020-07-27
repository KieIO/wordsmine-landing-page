import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

import './ChangeLanguage.scss';

const { Option } = Select;

const ChangeLanguage = () => {
    const { i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    return (
        <div className="change-language">
            <Select defaultValue="English" style={{ width: 120 }} onChange={handleChange}>
                <Option value="en">English</Option>
                <Option value="vn">Vietnamese</Option>
            </Select>
        </div>
    );
};

export default ChangeLanguage;