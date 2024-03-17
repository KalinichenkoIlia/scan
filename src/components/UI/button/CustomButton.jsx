import styles from '../../../styles/UI/CustomButton.modules.css'
import {Link} from "react-router-dom";

export const CustomButton = ({type, text, link}) => (
    <Link to={link}>
        <button
            type={type}
            className={styles.button}
        >{text}</button>
    </Link>


)