import React, {useContext, useEffect, useState} from "react";
import styles from '../../styles/OutputSearchResults.modules.css'
import imgWoman from '../../images/search/woman.svg'
import GeneralSummary from "./GeneralSummary";


function OutputSearchResults(){

    return(
        <div className={styles.search_results}>
            <div className={styles.banner}>
                <div className={styles.banner_content}>
                <h2>Ищем. Скоро <br/>будут результаты</h2>
                    <p>
                        Поиск может занять некоторое время, <br/> просим сохранять терпение.
                    </p>
                </div>
            <img src={imgWoman} alt='woman'/>
            </div>
            <GeneralSummary/>
        </div>
    )
}
export default OutputSearchResults;

