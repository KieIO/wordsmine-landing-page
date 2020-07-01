import React from 'react';
import Scrollspy from 'react-scrollspy'
import HeaderCategoryItem from '../HeaderCategoryItem/HeaderCategoryItem';
import { CATEGORY_HEADER } from '../../../../utils/constant';

const HeaderCategory = () => {
    return (  
        
        <section className="header-category">
                <Scrollspy className="header-category__list" items={CATEGORY_HEADER.map(item => item.target)} currentClassName="active">
                {
                    CATEGORY_HEADER.map((item, index)=>(
                        <li className="header-category__item" key={index}>
                            <HeaderCategoryItem {...item}/>
                        </li>
                    ))
                }
                </Scrollspy>
        </section>

    );
}
 
export default HeaderCategory;