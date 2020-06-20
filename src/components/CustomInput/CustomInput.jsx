import React from 'react';
import { Input } from 'antd';



const CustomInput = ({placeholder, label}) => {
    return ( 
        <div className="custom-input">
            <span className="custom-input__placeholder">{label || placeholder}</span>
            <Input placeholder={placeholder} />
        </div>
     );
}
 
export default CustomInput;