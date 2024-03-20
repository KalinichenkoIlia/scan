import styles from '../../../styles/UI/CustomButton.modules.css'
import {Link} from "react-router-dom";

export const CustomButton = ({type, text, link, onClick}) => (
    <Link to={link}>
        <button
            onClick={onClick}
            type={type}
            className={styles.button}
        >{text}</button>
    </Link>
)