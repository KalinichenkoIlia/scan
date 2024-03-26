import * as React from "react";
import styles from '../styles/Footer.modules.css'
import logo from '../images/Logo/logo2.svg'

const Footer = (props) => {
    return (
        <footer style={props.styles} className={styles.footer}>
            <img src={logo} alt='logo'/>
            <ul>
                <li>г. Москва, Цветной б-р, 40</li>
                <li>+7 495 771 21 11</li>
                <li>info@skan.ru</li>
            </ul>

        </footer>
    );
};

export default Footer;