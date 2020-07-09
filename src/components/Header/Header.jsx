import React, { useContext } from 'react';
import Cookies from 'js-cookie'
import Logo from './components/Logo/Logo';
import HeaderCategory from './components/HeaderCategory/HeaderCategory';
import HeaderBurgerMenu from './components/HeaderBurgerMenu/HeaderBurgerMenu.component';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_KEY_GOOGLE } from '../../utils/constant';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

const Header = () => {
    const [userContext, setUserContext] = useContext(UserContext)
    const logout = () => {
        Cookies.remove(AUTH_TOKEN_KEY);
        Cookies.remove(AUTH_TOKEN_KEY_GOOGLE);
        setUserContext(null)
    }

    return (
        <header className="header">
            <div className="header__large">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="header__right" id="header__right">
                    <div className="header__category" id="header__category">
                        <HeaderCategory />
                    </div>

                    <div className="header__btn" id="header__btn">
                        {
                            (userContext || {}).authToken ?
                                <div className="header__btn-item">
                                    <ButtonCustom onClick={logout}>Logout</ButtonCustom>
                                </div>
                                : (
                                    <>
                                        <div className="header__btn-item">
                                            <Link to="/login">
                                                <ButtonCustom type="default" ghost={true}>Login</ButtonCustom>
                                            </Link>
                                        </div>
                                        <div className="header__btn-item">
                                            <Link to="/register">
                                                <ButtonCustom >Register</ButtonCustom>
                                            </Link>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="header__small">
                <HeaderBurgerMenu />
            </div>
        </header>
    );
}

export default React.memo(Header)   ;