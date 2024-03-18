import * as React from "react";
import styles from "../../styles/Header.module.css";
import logo from '../../images/Logo/logo.svg'
import InfoPanel from "./InfoPanel";
import RegisterPanelDesktop from "./RegisterPanelDesktop";
import UserPanel from "./UserPanel";
import BurgerMenu from "./BurgerMenu";
import {useEffect, useContext} from "react";

import {AuthContext} from "../context/Contexts";
import {Link} from "react-router-dom";
import {isExpired} from "react-jwt";


function Header() {

    let {isAuthenticated} = useContext(AuthContext);


    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <nav className={styles.desktop}>
                <ul className={styles.ul}>
                    <li><Link to='/'>Главная</Link></li>
                    <li>Тарифы</li>
                    <li><Link to='/login'>FAQ</Link></li>
                </ul>
            </nav>

            <>
                {!isAuthenticated ? <RegisterPanelDesktop/> : <UserPanel/>}
                <BurgerMenu/>
            </>

        </header>
    )
}

export default Header;