import React from 'react';
import Logo from './components/Logo/Logo';
// import ButtonCustom from '../ButtonCustom/ButtonCustom';
import HeaderCategory from './components/HeaderCategory/HeaderCategory';
import HeaderBurgerMenu from './components/HeaderBurgerMenu/HeaderBurgerMenu.component';

const Header = () => {
    return (
        <header className="header">
            <div className="header__large">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__right" id="header__right">
                    <div className="header__category" id="header__category">
                        <HeaderCategory/>
                    </div>

                    {/* <div className="header__btn" id="header__btn">
                        <div className="header__btn-item">
                            <ButtonCustom size="large" type="default" ghost={true}>Login</ButtonCustom>
                        </div>
                        <div className="header__btn-item">
                            <ButtonCustom size="large">Sign up</ButtonCustom>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="header__small">
                <HeaderBurgerMenu/>
            </div>
        </header>
    );
}

export default Header;