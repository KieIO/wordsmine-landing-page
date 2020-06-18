import React from 'react';
import { Button } from 'antd';

const ButtonCustom = ({ title, children, type= "primary", ...rest}) => {
    return (
        <Button type={type} shape="round" className="button-custom" {...rest}>
            {title || children}
        </Button>
    );
}

export default ButtonCustom;