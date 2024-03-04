import * as React from "react";
import {Component} from "react";
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer";
import Group from '../../images/2398.svg'

import style from '../../styles/Main.modules.css'


class Main extends Component<any, any>{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div >
                <img src={Group} />
                <h1>сервис по поиску публикаций
                    о компании
                    по его инн</h1>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default Main