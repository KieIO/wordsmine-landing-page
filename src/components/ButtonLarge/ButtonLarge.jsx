import React from 'react';
import { Button } from 'antd';
import './ButtonLarge.scss';

const ButtonCustom = ({ title, children, type= "primary", ...rest}) => {
    return (
        <Button type={type} className="button-large" {...rest}>
            {title || children}
        </Button>
    );
}

export default ButtonCustom;