import * as React from "react";

import Card from "./Card";
import icon_bulb from "../../images/card/light_bulb.svg";
import {ColorCard, BEGINNER_TEXT, BUSINESS_TEXT, PRO_TEXT} from "./dataCard";
import icon_target from "../../images/card/target.svg";
import icon_laptop from "../../images/card/laptop.svg";
import styles from '../../styles/Cards.css'
import { useContext } from "react";
import { AuthContext } from "../context/Contexts";

function Cards() {
    const {isAuthenticated} = useContext(AuthContext);
    return(
        <div>
            <div className={styles.card_block}>
                <Card className={styles.beginner}
                      icon={icon_bulb}
                      nameProdukt={'Beginner'}
                      text={BEGINNER_TEXT}
                      colorCard={ColorCard["card-Beginner"]}
                      isAuthenticated={isAuthenticated}/>

                <Card  className={styles.pro}
                       icon={icon_target}
                       nameProdukt={'Pro'}
                       text={PRO_TEXT}
                       colorCard={ColorCard["card-Pro"]}/>

                <Card  className={styles.business}
                       icon={icon_laptop}
                       nameProdukt={'Business'}
                       text={BUSINESS_TEXT}
                       colorCard={ColorCard["card-Business"]}

                />
            </div>
        </div>
    )
}
export default Cards;