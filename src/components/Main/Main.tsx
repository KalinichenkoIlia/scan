import * as React from "react";
import {Component} from "react";
import {Link, Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer";
import Group from '../../images/2398.svg'

import style from '../../styles/Main.modules.css'
import Carousel from "../UI/Carousel";


class Main extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className={style.grid_block}>
                        <div className={style.group }>
                            <h1>сервис по поиску</h1>
                            <h1>публикаций</h1>
                            <h1>о компании</h1>
                            <h1>по его инн</h1>
                            <h3>Комплексный анализ публикаций, получение данных </h3>
                            <h3>в формате PDF на электронную почту.</h3>
                            <button disabled={false} >Запросить данные</button>
                        </div>
                        <img  src={Group} alt='svg_img'/>
                    </div>
                    <div className={style.slider}>
                        <h1>почему именно мы</h1>
                        <Carousel/>


                    </div>

                </main>

                <Footer/>
            </div>

        )
    }
}

export default Main