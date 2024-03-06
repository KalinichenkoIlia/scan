import * as React from "react";
import style from '../styles/Footer.modules.css'

import "../fonts/Inter/Inter-Regular.ttf"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                <li>г. Москва, Цветной б-р, 40</li>
                <li>+7 495 771 21 11</li>
                <li>info@skan.ru</li>
            </ul>

        </footer>
    );
};

export default Footer;