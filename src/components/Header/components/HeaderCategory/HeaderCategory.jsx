import React from 'react';
import Scrollspy from 'react-scrollspy'
import HeaderCategoryItem from '../HeaderCategoryItem/HeaderCategoryItem';
import { CATEGORY_HEADER } from '../../../../utils/constant';
import { useEffect } from 'react';

import './HeaderCategory.scss';

const HeaderCategory = () => {
    useEffect(() => {
        window.scrollTo(0, 1) // to remove active "Value" in header at first
        const valueLinkElement = document.getElementsByClassName("header-category__item")[0]
        const valueElement = document.getElementById("value")

        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            if (
                valueElement.offsetTop <= fromTop + 100 &&
                valueElement.offsetTop + valueElement.offsetHeight > fromTop + 100
            ) {
                valueLinkElement.classList.add("active")

            } else {
                valueLinkElement.classList.remove("active")

            }
        });
    }, [])
    return (

        <section className="header-category">
            <Scrollspy className="header-category__list"
                offset={-100}
                items={[...CATEGORY_HEADER.map(item => item.target), "banner"]} currentClassName="active">
                {/* <li className="header-category__item--hidden" href="#banner" >
                    <a  href="#banner">Banner</a>
                </li> */}
                {
                    CATEGORY_HEADER.map((item, index) => (
                        <li className="header-category__item" key={index}>
                            <HeaderCategoryItem {...item} />
                        </li>
                    ))
                }
            </Scrollspy>
        </section>

    );
}

export default HeaderCategory;