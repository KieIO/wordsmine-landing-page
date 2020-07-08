import React from 'react';
import { Button } from 'antd';

const ButtonCustom = ({ title, size, type = "primary", children, ...rest}) => {
    return (
        <Button type={type}  className={`button-custom ${size}`} {...rest}>
            {title || children}
        </Button>
    );
}

export default ButtonCustom;