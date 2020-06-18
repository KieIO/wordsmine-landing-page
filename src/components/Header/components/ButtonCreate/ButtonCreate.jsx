import React from 'react';
import { Tooltip } from 'antd';

const ButtonCreate = () => {
    return (
        <Tooltip placement="bottom" title="Create">
            <div className="button-create">
                <a href="/">
                    <span className="lnr lnr-file-add button-create__icon"></span>
                </a>
            </div>
        </Tooltip>
    );
}

export default ButtonCreate;