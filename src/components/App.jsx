import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/Contexts";
import { useState, useEffect } from "react";
import { isExpired } from "react-jwt";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Authorization from "./Authorization/Authorization";
import Search from "./Search/Search";
import styles from '../styles/App.modules.css'


const App = () => {
    const [isAuthenticated, setAuth] = useState(false);
    // 'isExpired' вернет логическое значение
    //  true => срок действия вашего токена истек
    //  false => срок действия вашего токена не истек
    const expired = !isExpired(localStorage.getItem('accessToken'));

    useEffect(() => {
        setAuth(expired)
    }, [])

    return (
        <div className={styles.app}>
            <AuthContext.Provider value={{isAuthenticated,setAuth }}>
                <Routes basename='/'>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>} />
                        <Route path='/login' element={<Authorization/>}/>
                        <Route path='/search' element={<Search/>} />
                    </Route>
                </Routes>
            </AuthContext.Provider>

        </div>
    );
};

export default App;