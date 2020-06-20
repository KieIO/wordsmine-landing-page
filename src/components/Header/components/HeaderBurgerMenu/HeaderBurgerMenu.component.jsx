import React from 'react';
import { CATEGORY_HEADER } from '../../../../utils/constant';
import HeaderCategoryItem from '../HeaderCategoryItem/HeaderCategoryItem';
import Logo from '../Logo/Logo';
import { useState } from 'react';

const HeaderBurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = (e) => {
        e.preventDefault()
        
        const element = document.getElementById("header-menu")
        if (element) {
            if (isOpen) {
                element.classList.toggle("header-burger-meu__content--open")
            } else {
                element.classList.toggle("header-burger-meu__content--open")
            }
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className="header-burger-meu">
            <div className="header-burger-meu__top">
                <Logo />
                <div className="header-burger-meu__icon"  onClick={toggleIsOpen}>
                    <span className="lnr lnr-menu"></span>
                </div>
            </div>

                <div id="header-menu" className="header-burger-meu__content">
                    <ul className="header-burger-meu__list">
                        {
                            CATEGORY_HEADER.map((item, index) => (
                                <li className="header-burger-meu__item" key={index}>
                                    <HeaderCategoryItem {...item} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </div>
    );
}

export default HeaderBurgerMenu;