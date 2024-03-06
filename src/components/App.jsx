import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer"
import style from '../styles/App.modules.css'
import Main from "./Main/Main";

const App = () => {
    return (
        <div className={style.app}>
            <Main/>
        </div>
    );
};

export default App;