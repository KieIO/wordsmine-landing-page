import React from 'react';
import { useTranslation } from 'react-i18next';

import './ToolTipCovid.scss';

const ToolTipCovid = (props) => {
    const { t } = useTranslation();

    return (
        <div className="tooltip-covid19" style={props.isCloseToolTip ? { opacity: 0, transition: 'opacity .5s ease-out' } : { opacity: 1 }}>
            <p className="content-tooltip">{t('toolTipContent')}</p>
            <p className="close-tooltip" onClick={props.closeToolTip}>X</p>
        </div>
    );
};

export default ToolTipCovid;