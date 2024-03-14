import React, {Component} from "react";
import { Outlet } from 'react-router-dom';

import styles from '../../styles/Main.modules.css'

import Header from "../Header/Header";
import Footer from "../Footer";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        };
    }

    render() {
        return (!this.state.isLoaded ? "loading..." : (
            <>
                <Header/>
                <main className={styles.main}>
                    <Outlet/>
                </main>
                <Footer/>
            </>
        ));
    };
}

export default Main;