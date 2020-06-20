import React from 'react';
import HeaderCategoryItem from '../HeaderCategoryItem/HeaderCategoryItem';
import { CATEGORY_HEADER } from '../../../../utils/constant';


const HeaderCategory = () => {
    return (  
        <section className="header-category">
            <li className="header-category__list">
                {
                    CATEGORY_HEADER.map((item, index)=>(
                        <ul className="header-category__item" key={index}>
                            <HeaderCategoryItem {...item}/>
                        </ul>
                    ))
                }
            </li>
        </section>
    );
}
 
export default HeaderCategory;