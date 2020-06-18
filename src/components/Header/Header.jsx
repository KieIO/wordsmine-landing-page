import React from 'react';
import ButtonCreate from './components/ButtonCreate/ButtonCreate';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
                <Logo/>
            </div>
            <div className="header__right">
                <div className="header__tools">
                    <div className="header__btn-create">
                        <ButtonCreate/>
                    </div>
                    <Search/>
                </div>
                <div className="header__btn">
                    <ButtonCustom size="large" type="default" ghost={true}>Login</ButtonCustom>
                    <ButtonCustom size="large">Sign up</ButtonCustom>
                </div>
            </div>
        </header>
     );
}
 
export default Header;