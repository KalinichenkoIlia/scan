import React, {useContext, useEffect, useState} from "react";
import GeneralSummary from "./GeneralSummary";
import {updateHistograms, OBJECT_SEARCH_URL} from "../../data/data";
import axios from "axios";
import ListDocuments from "./ListDocuments";
import Footer from "../Footer";
import {AuthContext} from "../context/Contexts";

import imgWoman from '../../images/search/woman.svg';

import styles from '../../styles/OutputSearchResults.modules.css';
import {Loader} from "../UI/Loader";


function OutputSearchResults(props) {
    const {setAuth} = useContext(AuthContext);
    const [summaryLoaded, setSummaryLoaded] = useState(false);
    const [documentsId, setDocumentsId] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        let accessToken = localStorage.getItem('accessToken');
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
                        setLoading(true)
                    }).catch(error => {
                        console.log(error)
                    })
            })
            ();
        }
    }, [summaryLoaded])

    return (
        <div className={styles.search_results}>
            <div className={styles.banner}>
                <div className={styles.banner_content}>
                    <h1>Ищем. Скоро <br/>будут результаты</h1>
                    <p>
                        Поиск может занять некоторое время, <br/> просим сохранять терпение.
                    </p>
                </div>
                <img src={imgWoman} alt='woman'/>
            </div>
            <GeneralSummary setSummaryLoaded={setSummaryLoaded} documentsId={documentsId}
                            histograms_data={updateHistograms(props.values)}/>
            <h2>Список документов</h2>

            {loading ? <ListDocuments documentsId={documentsId}/> :<div style={{padding:'40px'}}>
                <Loader fontSize='8px'/>
            </div> }
            <Footer styles={{marginBottom: '90px'}}/>
        </div>
    )
}

export default OutputSearchResults;

