import React, { useState} from "react";

import styles from '../../styles/LoginForm.modules.css'
import {Link} from "react-router-dom";


function LoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        console.log(event.value)
    }

    return (
        <form  className={styles.login_form}>
            <div className={styles.container_input}>
                <div>
                    <label >Логин или номер телефона:</label>
                    <input className={styles.input} name='name' type='text' onChange={(e) => setLogin(e.target.value)}  required/>
                </div>
                <div>
                    <label>Пароль:</label>
                    <input className={styles.input} name='password' type='password' onChange={(e) => setPassword(e.target.value)} autoComplete='on'  required/>
                </div>
                <button className={styles.button} type='submit' disabled={!validateForm()}>Войти</button>
            </div>
            <a>Восстановить пароль</a>

        </form>
    );
}


export default LoginForm;