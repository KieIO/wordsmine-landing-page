import React from 'react';
import { useTranslation } from 'react-i18next';

import './HeaderCategoryItem.scss';

const HeaderCategoryItem = ({ target, name, isHandleClick = true, ...props }) => {
    const { t } = useTranslation();
    // const scrollToView = (e) => {
    //     if (isHandleClick) {
    //         e.preventDefault()
    //         e.stopPropagation()
    //         var element = document.querySelector(`#${target}`);
    //         if (element) {
    //             const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
    //             window.scrollTo(0, y)

    //             // active current item
    //             const listItem = document.getElementsByClassName("header-category-item");
    //             if (listItem) {
    //                 Array.from(listItem).map((item) => {
    //                     const parent = item.parentNode
    //                     const targetAttr = item.getAttribute("href")
    //                     const targetName = targetAttr.substr(1, targetAttr.length)
    //                     console.log("target: ", targetName, target)
    //                     if (targetName === target) {
    //                         if (Math.abs(y - window.pageYOffset) > 100) {
    //                             setTimeout(() => {
    //                                 parent.classList.add("active")
    //                             }, 10)
    //                         } else {
    //                             parent.classList.add("active")

    //                         }


    //                     } else {
    //                         parent.classList.remove("active")
    //                     }
    //                     return null;
    //                 }
    //                 )
    //             }
    //         }
    //     }
    // }
    return (
        <a className="header-category-item" href={`#${target}`}>
            {t(`${name}`)}
        </a>
    );
}

export default HeaderCategoryItem;