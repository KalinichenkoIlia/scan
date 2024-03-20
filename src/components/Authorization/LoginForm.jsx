import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {login_url} from "../../data/data";
import styles from '../../styles/LoginForm.modules.css'
import {InputField} from "../UI/input/InputField";
import iconsApi from '../../images/loginForm/api.svg'
import {AuthContext} from "../context/Contexts";


function LoginForm() {
    const [loginInData, setLogin] = useState({nickname: "", password: ''});
    const [messageError, getMessageError] = useState([]);

    const {isAuthenticated, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [])

    function validateForm() {
        return loginInData.nickname.length > 2 && loginInData.password.length > 2;
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
                navigate("/");
                localStorage.setItem('accessToken', response.data['accessToken']);
                setAuth(true);
            }

        } catch (error) {
            if (error.response.status === 401) {
                getMessageError(error.response.data.message)
            }
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
                    style={{boxShadow: messageError.length === 0 ? "#ccc" : "0 0 5px 0 red"}}
                    name='name'
                    label='Логин или номер телефона:'
                    type='text'
                    value={loginInData.nickname.value}
                    onChange={e => setLogin({...loginInData, nickname: e.target.value})}
                />
                <InputField
                    style={{boxShadow: messageError.length === 0 ? "#ccc" : "0 0 5px 0 red"}}
                    name='password'
                    label='Пароль:'
                    type='password'
                    value={loginInData.password.value}
                    onChange={e => setLogin({...loginInData, password: e.target.value})}
                />
                <p className={styles.error}>{messageError}</p>
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