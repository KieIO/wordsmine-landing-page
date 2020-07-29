import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { Link } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import HeaderCategory from './components/HeaderCategory/HeaderCategory';
import HeaderBurgerMenu from './components/HeaderBurgerMenu/HeaderBurgerMenu.component';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import { UserContext } from '../../contexts/user.context';
import { logout } from '../../api/user.api';
import ToolTipCovid from '../ToolTipCovid/ToolTipCovid';

import './Header.scss';

const Header = (props) => {
    const { t } = useTranslation()
    const [userContext, setUserContext] = useContext(UserContext)
    const handleLogout = async () => {
        try {
            await logout()
            setUserContext(null)
        } catch {
            message.error("Something went wrong, please try later!")
        }

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
                            userContext ?
                                <div className="header__btn-item">
                                    <ButtonCustom onClick={handleLogout}>{t('headerLogout')}</ButtonCustom>
                                </div>
                                : (
                                    <>
                                        <div className="header__btn-item">
                                            <Link to="/login">
                                                <ButtonCustom size="normal" type="default" ghost={true}>{t('headerLogin')}</ButtonCustom>
                                            </Link>
                                        </div>
                                        <div className="header__btn-item">
                                            <Link to="/register">
                                                <ButtonCustom size="normal">{t('headerRegister')}</ButtonCustom>
                                            </Link>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="header__small">
                <HeaderBurgerMenu logout={handleLogout} />
            </div>
            <ToolTipCovid closeToolTip={props.closeToolTip} isCloseToolTip={props.isCloseToolTip} />
        </header>
    );
}

export default React.memo(Header);