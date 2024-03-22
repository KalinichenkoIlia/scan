import React, {useState} from "react";

import styles from '../../styles/GeneralSummary.modules.css'
import SummarySlider from "./SummarySlider";
import {Loader} from "../UI/Loader";

function GeneralSummary(){
    const [lading, isLoaded] = useState(true);



    return(
        <div className={styles.summary}>
            <h2>Общая сводка</h2>
            <p>Найдено {} вариантов</p>
            <div>
                { !lading ? <Loader/> : <SummarySlider/> }
            </div>

        </div>
    )
}
export default GeneralSummary;