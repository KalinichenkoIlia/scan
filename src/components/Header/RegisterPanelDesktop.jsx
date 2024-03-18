import * as React from "react";
import styles from "../../styles/RegisterPanelDesktop.modules.css";
import {Link} from "react-router-dom";


function RegisterPanelDesktop(){

    return(
        <nav className={styles.container_nav}>
            <Link className={styles.reg} to='/'> Зарегистрироваться</Link>
            <span></span>
            <Link to='/login'>
                <button className={styles.auth}>Войти</button>
            </Link>
        </nav>
    )
}
export default RegisterPanelDesktop;