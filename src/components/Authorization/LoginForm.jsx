import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {login_url} from "../../data/data";
import styles from '../../styles/LoginForm.modules.css'
import {InputField} from "../UI/input/InputField";
import iconsApi from '../../images/loginForm/api.svg'
import {AuthContext} from "../context/Contexts";


function LoginForm() {
    const accessToken = localStorage.getItem('accessToken');
    const [loginInData, setLogin] = useState({nickname: "", password: ''});
    const [messageError, getMessageError] = useState({});

    const {isAuthenticated, setAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setAuth(true)
            navigate("/");
        }
    }, [])

    function validateForm() {
        return loginInData.nickname.length > 0 && loginInData.password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post(
                login_url,
                {
                    'login': `${loginInData.nickname}`,
                    'password': `${loginInData.password}`
                });
            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data['accessToken']);
                setAuth(true);
                navigate("/");
                }

            } catch (error) {
                getMessageError({'error': error.response.data.message})
                console.error(error)
            }
    }

    return (
        <form className={styles.login_form}>
            <nav className={styles.navigation}>
                <div>
                    <h4>Войти</h4>
                    <span></span>
                </div>
                <div>
                    <h4>Зарегистрироваться</h4>
                    <span></span>
                </div>
            </nav>
            <div className={styles.container_input}>
                <InputField
                    name='name'
                    label='Логин или номер телефона:'
                    type='text'
                    value={loginInData.nickname.value}
                    onChange={e => setLogin({...loginInData, nickname: e.target.value})}
                />
                <InputField
                    name='password'
                    label='Пароль:'
                    type='password'
                    value={loginInData.password.value}
                    onChange={e => setLogin({...loginInData, password: e.target.value})}
                />
                <p className={styles.error}>{messageError.error}</p>
                <button onClick={handleSubmit} className={styles.button} type='submit'
                        disabled={!validateForm()}>Войти
                </button>
            </div>
            <p>
                <a href='/'>Восстановить пароль</a>
            </p>
            <img src={iconsApi} alt='api'/>
        </form>
    );
}


export default LoginForm;