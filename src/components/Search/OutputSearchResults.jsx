import React, {useContext, useEffect, useState} from "react";
import styles from '../../styles/OutputSearchResults.modules.css'
import imgWoman from '../../images/search/woman.svg'
import GeneralSummary from "./GeneralSummary";
import {updateHistograms, OBJECT_SEARCH_URL} from "../../data/data";
import axios from "axios";
import ListDocuments from "./ListDocuments";

let accessToken = localStorage.getItem('accessToken');


function OutputSearchResults(props) {
    const [summaryLoaded, setSummaryLoaded] = useState(false);
    const [documentsId, setDocumentsId] = useState([]);

    useEffect(() => {

        if (summaryLoaded) {
            (async () => {
                await axios.post(
                    OBJECT_SEARCH_URL,
                    updateHistograms(props.values),
                    {
                        headers:
                            {"Authorization": `Bearer ${accessToken}`}
                    })
                    .then(response => {

                        setDocumentsId(response.data);
                        console.log(response.data);

                    }).catch(error => {
                        console.log(error)
                    })
            })
            ();
        }
    }, [summaryLoaded, props.values])

    return (
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
            <GeneralSummary setSummaryLoaded={setSummaryLoaded} histograms_data={updateHistograms(props.values)}/>
            <h2>Список документов</h2>
            <ListDocuments documentsId={documentsId}/>
        </div>
    )
}

export default OutputSearchResults;

