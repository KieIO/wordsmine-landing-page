import React, { useState, useContext } from "react";
import Scrollspy from "react-scrollspy";
import HeaderCategoryItem from "../HeaderCategoryItem/HeaderCategoryItem";
import Logo from "../Logo/Logo";
import { UserContext } from "../../../../contexts/user.context";
import ButtonCustom from "../../../ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./HeaderBurgerMenu.scss";

const HeaderBurgerMenu = ({ logout, isHideCategory }) => {
  const { t } = useTranslation();

  const CATEGORY_HEADER = [
    {
      name: "headerOverview",
      target: "overview",
    },
    {
      name: "headerValue",
      target: "value",
    },
    {
      name: "headerTestimonial",
      target: "testimonial",
    },
  ];

  const [userContext] = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = (e) => {
    e.preventDefault();

    const eleIcon = document.getElementById("header-burger-menu__icon");
    if (eleIcon) {
      eleIcon.classList.toggle("header-burger-menu__icon-change");
    }

    const element = document.getElementById("header-menu");
    if (element) {
      element.classList.toggle("header-burger-menu__content--open");
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-burger-menu">
      <div className="header-burger-menu__top">
        <Logo />
        {/* <div className="header-burger-menu__icon"  onClick={toggleIsOpen}>
                    <span className="lnr lnr-menu"></span>
                </div> */}
        <div
          className="header-burger-menu__icon"
          id="header-burger-menu__icon"
          onClick={toggleIsOpen}
        >
          <div className="icon-buger-container">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>

      <div id="header-menu" className="header-burger-menu__content">
        {!isHideCategory && (
          <Scrollspy
            className="header-burger-menu__list"
            offset={-80}
            items={CATEGORY_HEADER.map((item) => item.target)}
            currentClassName="active"
          >
            {CATEGORY_HEADER.map((item, index) => (
              <li className="header-burger-menu__item" key={index}>
                <HeaderCategoryItem {...item} isHandleClick={false} />
              </li>
            ))}
          </Scrollspy>
        )}
      </div>
    </div>
  );
};

export default HeaderBurgerMenu;
