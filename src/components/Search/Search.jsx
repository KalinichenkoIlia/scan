import React, {useContext, useEffect, useState} from "react";
import OutputSearchResults from './OutputSearchResults';
import {AuthContext} from "../context/Contexts";
import FormRequestParameters from "./FormRequestParameters";
import {useNavigate} from "react-router-dom";
import { useRef } from 'react';

import styles from '../../styles/Search.modules.css';
import human from '../../images/search/human.svg';
import folders from '../../images/search/Folders.svg';
import document from '../../images/search/Document.svg';




function Search(){
    const {isAuthenticated, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValue] = useState({startDate:"", endDate: '', values: {}});
    const overlayRef = useRef();

    const openSearch = () => {
        overlayRef.current.style.width = '100%';
    };

    const closeSearch = () => {
        overlayRef.current.style.width = '0%';
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    },[isAuthenticated])
    return(
        <>
            <div className={styles.wrapper_search}>
                <div>
                    <h1 className={styles.h1}>Найдите необходимые</h1>
                    <h1 className={styles.h1}>данные в пару кликов.</h1>
                    <h4 className={styles.h4}>Задайте параметры поиска.<br/>
                   Чем больше заполните, тем точнее поиск</h4>
                    <FormRequestParameters openSearch={openSearch} setValue={setValue}/>
                </div>
                <img className={styles.img_document} src={document} alt='document'/>
                <div className={styles.images_container}>
                    <div>
                        <img className={styles.img_folders} src={folders} alt='folders'/>
                    </div>

                    <img className={styles.img_human} src={human} alt='human'/>
                </div>
            </div>
            <div ref={overlayRef} className={styles.overlay}>
                <div className={styles.overlay_content}>
                     <OutputSearchResults values={values}/>
                </div>

            </div>
        </>
    )
}
export default Search;