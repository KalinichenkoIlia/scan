import * as React from "react";
import styles from "../../styles/BurgerMenu.modules.css";
import logoTwo from "../../images/Logo/logo2.svg";
import {useState} from "react";
import {MobileButton} from "../UI/button/MobileButton";



function BurgerMenu(){
    const [isOpen, setOpen] = useState(styles.nav_container_deactivate);
    const [buttonStyle, setButtonStyle] = useState(styles.button_open);
    const handleClick = () => {
        localStorage.removeItem('accessToken');
    }

    const handleDropdownClick = () => {
        buttonStyle === styles.button ? setButtonStyle(styles.button_open) : setButtonStyle(styles.button);
        isOpen === styles.nav_container_active ? setOpen(styles.nav_container_deactivate) : setOpen(styles.nav_container_active);
    }
    return(
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
                    {!localStorage.getItem('accessToken') ?  <MobileButton onClick={null}
                                                                           link='/' text='Войти'/> :
                        <MobileButton onClick={handleClick} text='Выйти'/>}
                </ul>
            </nav>
        </>
    )
}

export default BurgerMenu