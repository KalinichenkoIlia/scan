import * as React from "react";
import {useContext} from "react";
import avatar from '../../images/UserPanel/avatar.svg'
import styles from '../../styles/UserPanel.modules.css'
import {AuthContext} from "../context/Contexts";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function UserPanel() {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext);
    const handleClick = () => {
        localStorage.removeItem('accessToken');
        setAuth(false);
        navigate('/');
    }
    return (
        <div className={styles.user_panel}>
            <ul>
                <h3>Алексей А.</h3>
                <Link onClick={handleClick}>Выйти</Link>
            </ul>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
        </div>
    )
}

export default UserPanel;