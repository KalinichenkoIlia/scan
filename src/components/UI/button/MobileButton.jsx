import {Link} from "react-router-dom";

export const MobileButton = ({onClick, link, text}) => (
    <Link to={link}>
        <button onClick={onClick}>
            {text}
        </button>
    </Link>
)