import * as React from "react";
import styles from "../../styles/Header.module.css";
import logo from '../../images/Logo/logo.svg'
import logoTwo from '../../images/Logo/logo2.svg'
import {useState} from "react";

function Header() {
    const [isOpen, setOpen] = useState(styles.nav_container_deactivate);
    const [buttonStyle , setButtonStyle] = useState(styles.button_open)

    const handleDropdownClick = () =>{
        buttonStyle ===  styles.button ? setButtonStyle(styles.button_open) : setButtonStyle(styles.button);
        isOpen === styles.nav_container_active ? setOpen(styles.nav_container_deactivate) : setOpen(styles.nav_container_active);
    }

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <ul className={styles.desktop}>
                <li>
                    <a href='/'>Главная</a>
                </li>
                <li>Тарифы</li>
                <li>FAQ</li>
                <div>
                    <a className={styles.reg} href='/'> Зарегистрироваться</a>
                    <span></span>
                    <a href='/login'><button className={styles.auth}>Войти</button></a>
                </div>
            </ul>
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
                    <a href='/login'>
                        <button>Войти</button>
                    </a>
                </ul>
            </nav>

        </header>
    )
}

export default Header;