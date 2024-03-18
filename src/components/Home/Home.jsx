import * as React from "react";
import {Component} from "react";
import Cards from "../Cards/Cards";
import Carousel from "./Carousel";
import styles from '../../styles/Home.modules.css'
import HumanBanner from '../../images/home/human.svg'
import Human from '../../images/home/Group 14.svg'
import {CustomButton} from "../UI/button/CustomButton";
import {useContext} from "react";
import {AuthContext} from "../context/Contexts";


function Home () {
    let {isAuthenticated} = useContext(AuthContext);
        return (
            <div className={styles.main}>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h1>сервис по поиску</h1>
                        <h1>публикаций</h1>
                        <h1>о компании</h1>
                        <h1>по его инн</h1>
                        <div>
                            <h3>Комплексный анализ публикаций, получение данных </h3>
                            <h3>в формате PDF на электронную почту.</h3>
                        </div>
                        { isAuthenticated ? <CustomButton text='Запросить данные'/> : null }

                    </div>
                    <img src={HumanBanner} alt='human'/>
                </div>
                <div className={styles.wrapper}>
                        <h1 className={styles.text_above} >почему именно мы</h1>
                        <Carousel/>
                        </div>
                        <div className={styles.human}>
                        <img src={Human} alt='human'/>
                        </div>
                            <div className={styles.tariffs}>
                            <h1>наши тарифы</h1>
                    <Cards/>
                </div>
            </div>
        )
    }


export default Home