import React, { useContext } from "react";
import { message } from "antd";

import Logo from "./components/Logo/Logo";
import HeaderCategory from "./components/HeaderCategory/HeaderCategory";
import HeaderBurgerMenu from "./components/HeaderBurgerMenu/HeaderBurgerMenu.component";
import { UserContext } from "../../contexts/user.context";
import { logout } from "../../api/user.api";
import ToolTipCovid from "../ToolTipCovid/ToolTipCovid";

import "./Header.scss";

const Header = (props) => {
  const [setUserContext] = useContext(UserContext);
  const handleLogout = async () => {
    try {
      await logout();
      setUserContext(null);
    } catch {
      message.error("Something went wrong, please try later!");
    }
  };

  return (
    <header className="header">
      <div className="header__large">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__right" id="header__right">
          {!props.isHideTooltip && (
            <div className="header__category" id="header__category">
              <HeaderCategory />
            </div>
          )}
        </div>
      </div>
      <div className="header__small">
        <HeaderBurgerMenu
          logout={handleLogout}
          isHideCategory={props.isHideTooltip}
        />
      </div>
      {!props.isHideTooltip && (
        <ToolTipCovid
          closeToolTip={props.closeToolTip}
          isCloseToolTip={props.isCloseToolTip}
        />
      )}
    </header>
  );
};

export default React.memo(Header);
