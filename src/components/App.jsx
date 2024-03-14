import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Main from "./Main/Main";
import Authorization from "./Authorization/Authorization";

import styles from '../styles/App.modules.css'


const App = () => {
    return (
        <div className={styles.app}>
            <Routes basename='/'>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>} />
                    <Route path='/authorization' element={<Authorization/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;