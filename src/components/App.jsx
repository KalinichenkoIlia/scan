import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Login from "./Authorization/Login";
import styles from '../styles/App.modules.css'
import { AuthContext } from "./context/Contexts";
import { useState} from "react";



const App = () => {
    const [isAuthenticated, setAuth] = useState(false);

    return (
        <div className={styles.app}>
            <AuthContext.Provider value={{isAuthenticated,setAuth }}>
                <Routes basename='/'>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>} />
                        <Route path='/login' element={<Login/>}/>
                    </Route>
                </Routes>
            </AuthContext.Provider>

        </div>
    );
};

export default App;