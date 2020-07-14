import React from 'react';
import { Button } from 'antd';
import './ButtonCustom.scss';

const ButtonCustom = ({ title, size, type = "primary", children, ...rest}) => {
    return (
        <Button type={type}  className={`button-custom ${size} ${type}`} {...rest}>
            {title || children}
        </Button>
    );
}

export default ButtonCustom;