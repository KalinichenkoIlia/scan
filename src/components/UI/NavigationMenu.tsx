import * as React from "react";
import style from "../../styles/UI/NavigationMenu.module.css"
import {Link, useParams} from "react-router-dom";

function NavigationMenu() {
    return (
        <div className={style.menu}>
            <ul>
                <li>Главная</li>
                <li>Тарифы</li>
                <li>FAQ</li>
            </ul>
        </div>
    )
}

export default NavigationMenu