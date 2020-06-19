import React, { useEffect } from 'react';
import ButtonCreate from './components/ButtonCreate/ButtonCreate';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

const Header = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        const height = window.scrollY;
        const element = document.getElementById("header__right")
        if (element) {
            if (height > 100) {
                element.classList.add('header__media')
            } else {
                element.classList.remove('header__media')
            }
        }
    }
    return (
        <header className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__right" id="header__right">
                <div className="header__tools">
                    <div className="header__btn-create">
                        <ButtonCreate />
                    </div>
                    <Search />
                </div>
                <div className="header__btn">
                    <div className="header__btn-item">
                        <ButtonCustom size="large" type="default" ghost={true}>Login</ButtonCustom>
                    </div>
                    <div className="header__btn-item">
                        <ButtonCustom size="large">Sign up</ButtonCustom>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;