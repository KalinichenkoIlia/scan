import * as React from "react";
import {Component} from "react";
import {Link, Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer";
import Group from '../../images/2398.svg'
import iconMagnifier from '../../images/Mask group.svg'
import img from '../../images/Group 14.svg'
import iconWatch from '../../images/Mask group (2).svg'
import iconShield from '../../images/Mask group (1).svg'

import style from '../../styles/Main.modules.css'
import Carousel from "../UI/Carousel";


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className={style.grid_block}>
                        <div className={style.group_block}>
                            <h1>сервис по поиску</h1>
                            <h1>публикаций</h1>
                            <h1>о компании</h1>
                            <h1>по его инн</h1>
                            <h3>Комплексный анализ публикаций, получение данных </h3>
                            <h3>в формате PDF на электронную почту.</h3>
                            <button >Запросить данные</button>
                        </div>
                        <img src={Group} alt='svg_img'/>
                    </div>
                    <div className={style.slider_block}>
                        <h1>почему именно мы</h1>
                        <Carousel>
                            <div className={style.carouselComponent}>
                                <img src={iconMagnifier} alt={iconMagnifier}/>
                                <h3>Огромная комплексная база</h3>
                                <h3>данных, обеспечивающая </h3>
                                <h3>объективный ответ на запрос</h3>
                            </div>
                            <div className={style.carouselComponent}>
                                <img src={iconWatch} alt={iconWatch}/>
                                <h3>Высокая и оперативная скорость </h3>
                                <h3>обработки заявки</h3>
                            </div>
                            <div className={style.carouselComponent}>
                                <img src={iconShield} alt={iconShield}/>
                                <h3>Защита конфеденциальных сведений,</h3>
                                <h3> не подлежащих разглашению по </h3>
                                <h3>федеральному законодательству</h3>
                            </div>

                            <div className={style.carouselComponent}>
                                <img src={iconMagnifier} alt={iconMagnifier}/>
                                <h3>Огромная комплексная база</h3>
                                <h3>данных, обеспечивающая </h3>
                                <h3>объективный ответ на запрос</h3>
                            </div>

                            <div className={style.carouselComponent}>
                                <img src={iconShield} alt={iconShield}/>
                                <h3>Защита конфеденциальных сведений,</h3>
                                <h3> не подлежащих разглашению по </h3>
                                <h3>федеральному законодательству</h3>
                            </div>

                        </Carousel>
                    </div>
                    <img className={style.img} src={img} alt='svg'/>
                </main>

                <Footer/>
            </div>

        )
    }
}

export default Main