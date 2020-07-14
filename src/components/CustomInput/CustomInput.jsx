import React from 'react';
import { Input } from 'antd';
import './CustomInput.scss';


export const CustomInputWithTitle = ({placeholder, label}) => {
    return ( 
        <div className="custom-input-with-title">
            <span className="custom-input__placeholder">{label || placeholder}</span>
            <Input placeholder={placeholder} />
        </div>
     );
}