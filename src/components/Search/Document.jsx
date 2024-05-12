import React, {useEffect, useState} from "react";
import axios from "axios";
import {DOCUMENTS_URL} from "../../data/data";
import {Link} from "react-router-dom";
import {getAttributes, xmlReplace} from "./utils";

import styles from '../../styles/Document.modules.css'




function Document(props) {

    const {idDocument} = props;
    const [document, setDocument] = useState([]);
    const [loading, setLoading] = useState(false);
    const [attributes, setAttributes] = useState({})

    useEffect(() => {
        let accessToken = localStorage.getItem('accessToken');
        (async () => {
            await axios.post(
                DOCUMENTS_URL,
                {"ids": [`${idDocument.encodedId}`]},
                {
                    headers:
                        {"Authorization": `Bearer ${accessToken}`}

                })
                .then(response => {
                    setDocument(response.data[0].ok);
                    setLoading(true)
                    setAttributes(
                        {
                            isTechNews: response.data[0].ok.attributes.isTechNews,
                            isAnnouncement: response.data[0].ok.attributes.isAnnouncement,
                            isDigest: true, //сервер возвращает все false
                        }
                    )

                }).catch(error => {
                    console.log(error)
                })
        })
        ();
    }, [])


    return (
        <>
            {loading ? <article className={styles.document}>

                <div className={styles.wrapper}>
                    <div className={styles.date}>
                        <time>{document.issueDate.substring(0, 10).split('-').reverse().join('.')}</time>
                        <Link to={document.url}>
                            {document.source.name.slice(0, 25)}
                        </Link>
                    </div>
                    <div className={styles.heading}>
                        <h3>{document.title.text}</h3>
                        <span>

                        <p>{getAttributes(attributes)}</p>
                    </span>
                    </div>
                    {document.content.image ? <img className={styles.img} src={document.content.image}
                                                   alt={document.content.image}/> : ''}

                    <div className={styles.text}>

                        <p>{xmlReplace(document.content.markup)}</p>


                    </div>
                    <div className={styles.article_footer}>
                        <Link target="_blank" to={document.url}>
                            <button>Читать в источнике</button>
                        </Link>
                        <p>{document.attributes.wordCount} слова</p>
                    </div>
                </div>

            </article> : ''}
        </>
    )
}

export default Document;