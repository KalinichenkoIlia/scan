import React, {Component} from "react";
import { Outlet } from 'react-router-dom';

import Header from "../Header/Header";
import Footer from "../Footer";

import styles from '../../styles/Main.modules.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        };
    }

    render() {
        return (!this.state.isLoaded ? "loading..." : (
            <div className={styles.wrapper}>
                <Header/>
                <main className={styles.main}>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        ));
    };
}

export default Main;