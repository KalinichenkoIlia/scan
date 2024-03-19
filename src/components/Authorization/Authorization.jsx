import React, {Component} from "react";
import styles from '../../styles/Authorization.modules.css'

import groupPeople from '../../images/authorization/Homo sapiens.svg'
import lock from '../../images/authorization/lock.svg'
import LoginForm from "./LoginForm";

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        };
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h3>Для оформления подписки </h3>
                        <h3>на тариф, необходимо </h3>
                        <h3>авторизоваться.</h3>
                    </div>
                    <div className={styles.wrapper_login_form}>
                        <img className={styles.lock} src={lock} alt='lock'/>
                        <LoginForm/>
                    </div>
                </div>
                <img className={styles.group_people} src={groupPeople} alt='group_people' />
            </div>
        );

    };
}

export default Authorization;