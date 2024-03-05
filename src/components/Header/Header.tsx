import * as React from "react";
import styles from "../../styles/Header.module.css";
import {LogoUpper} from "../SvgComponents/LogoUpper";
import NavigationMenu from "../UI/NavigationMenu";


const Header = () => {
    return (
        <div className={styles.header}>
           <LogoUpper />
            <div className={styles.menu}>
                <NavigationMenu/>
            </div>

        </div>
    );
};

export default Header;