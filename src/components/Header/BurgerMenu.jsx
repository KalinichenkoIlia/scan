import * as React from "react";
import styles from "../../styles/BurgerMenu.modules.css";
import logoTwo from "../../images/Logo/logo2.svg";
import {useState, useContext} from "react";
import {MobileButton} from "../UI/button/MobileButton";
import {AuthContext} from "../context/Contexts";


function BurgerMenu() {
    const [isOpen, setOpen] = useState(styles.nav_container_deactivate);
    const [buttonStyle, setButtonStyle] = useState(styles.button_open);
    const {isAuthenticated, setAuth} = useContext(AuthContext);

    const logOut = () => {
        setButtonStyle(styles.button_open);
        setOpen(styles.nav_container_deactivate);
        setAuth(false);
        localStorage.removeItem('accessToken');
    }
    const logIn = () => {
        setButtonStyle(styles.button_open);
        setOpen(styles.nav_container_deactivate);
    }

    const handleDropdownClick = () => {
        buttonStyle === styles.button ? setButtonStyle(styles.button_open) : setButtonStyle(styles.button);
        isOpen === styles.nav_container_active ? setOpen(styles.nav_container_deactivate) : setOpen(styles.nav_container_active);
    }

    return (
        <>
            <button type='button' className={`${buttonStyle}`} onClick={handleDropdownClick}>
                <span></span><span></span><span></span>
            </button>
            <nav className={`${isOpen}`}>
                <img className={styles.logo} src={logoTwo} alt='logo'/>
                <nav className={styles.nav_active}>
                </nav>
                <ul className={styles.menu_list}>
                    <li><a href='/'>Главная</a></li>
                    <li>Тарифы</li>
                    <li>FAQ</li>
                    <li>Зарегистрироваться</li>
                    {isAuthenticated ? <MobileButton onClick={logOut} link='/' text='Выйти'/> :
                        <MobileButton onClick={logIn} link='/login' text='Войти'/>}
                </ul>
            </nav>
        </>
    )
}

export default BurgerMenu;