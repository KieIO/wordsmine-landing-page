import React from 'react';


const HeaderCategoryItem = ({target, name}) => {
    return (
        <a className="header-category-item" href={`#${target}`}>
            {name}
        </a>
    );
}

export default HeaderCategoryItem;