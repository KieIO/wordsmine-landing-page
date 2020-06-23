import React from 'react';


const HeaderCategoryItem = ({target, name}) => {
    return (
        <a className="header-category-item" href={`#${target}`}>
            {/* <div> */}
            {name}

            {/* </div> */}
        </a>
    );
}

export default HeaderCategoryItem;