import React from 'react';

import './ToolTipCovid.scss';

const ToolTipCovid = (props) => {
    return (
        <div className="tooltip-covid19" style={props.isCloseToolTip ? {display: 'none'} : {display: 'flex'}}>
            <p className="content-tooltip">Stay Home And Take Your Learning With You!</p>
            <p className="close-tooltip" onClick={props.closeToolTip}>X</p>
        </div>
    );
};

export default ToolTipCovid;