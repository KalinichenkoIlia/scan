import * as React from "react";
import styles from "../../styles/Header.module.css";
import logo from '../../images/Logo/logo.svg'
import InfoPanel from "./InfoPanel";
import RegisterPanelDesktop from "./RegisterPanelDesktop";
import UserPanel from "./UserPanel";
import BurgerMenu from "./BurgerMenu";
import {useContext} from "react";
import {AuthContext} from "../context/Contexts";
import {Link} from "react-router-dom";


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

            <nav className={styles.left_patel}>
                {isAuthenticated ? <InfoPanel/> : null}

                {!isAuthenticated ? <RegisterPanelDesktop/> : <UserPanel/>}
            </nav>

            <BurgerMenu/>


        </header>
    )
}

export default Header;