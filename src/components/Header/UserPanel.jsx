import * as React from "react";
import {useContext} from "react";
import avatar from '../../images/UserPanel/avatar.svg'
import styles from '../../styles/UserPanel.modules.css'
import {AuthContext} from "../context/Contexts";

function UserPanel() {
    const {setAuth} = useContext(AuthContext);
    const handleClick = () => {
        localStorage.removeItem('accessToken');
        setAuth(false);
    }
    return (
        <div className={styles.user_panel}>
            <ul>
                <h3>Алексей А.</h3>
                <button onClick={handleClick}>Выйти</button>
            </ul>
            <img src={avatar} alt='avatar'/>
        </div>
    )
}

export default UserPanel;