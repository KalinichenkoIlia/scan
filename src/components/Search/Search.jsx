import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { useRef } from 'react';
import {AuthContext} from "../context/Contexts";
import FormRequestParameters from "./FormRequestParameters";
import styles from '../../styles/Search.modules.css';
import human from '../../images/search/human.svg';
import folders from '../../images/search/Folders.svg';
import document from '../../images/search/Document.svg'



function Search(){
    const {isAuthenticated, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState({startDate:"", endDate: '', values: {}});

    const overlayRef = useRef();

    const openSearch = () => {
        overlayRef.current.style.width = '100%';
    };

    const closeSearch = () => {
        overlayRef.current.style.width = '0%';
    };
    useEffect(() => {
        console.log(value)
    })


    return(
        <>
            <div className={styles.wrapper_search}>
                <div>
                    <h2 className={styles.h2}>Найдите необходимые</h2>
                    <h2 className={styles.h2}>данные в пару кликов.</h2>
                    <h4 className={styles.h4}>Задайте параметры поиска.<br/>
                   Чем больше заполните, тем точнее поиск</h4>

                    <FormRequestParameters openSearch={openSearch} setValue={setValue}/>

                    <button onClick={openSearch} className={styles.open_button}>
                    </button>
                </div>
                <img className={styles.img_document} src={document} alt='document'/>
                <div className={styles.images_container}>

                    <dib>
                        <img className={styles.img_folders} src={folders} alt='folders'/>
                    </dib>

                    <img className={styles.img_human} src={human} alt='human'/>
                </div>
            </div>


            <div ref={overlayRef} className={styles.overlay}>
                <button className={styles.close_button} onClick={closeSearch}>
                    &times;
                </button>
                <div className={styles.overlay_content}>

                </div>

            </div>
        </>
    )
}
export default Search;