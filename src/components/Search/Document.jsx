import React, {useEffect, useState} from "react";
import axios from "axios";
import {DOCUMENTS_URL} from "../../data/data";
import {Link} from "react-router-dom";
import styles from '../../styles/Document.modules.css'
import iMg from '../../images/22.svg'


let accessToken = localStorage.getItem('accessToken');
const xml = new DOMParser();


function Document(props) {

    const {idDocument} = props;
    const [document, setDocument] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

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
                    console.log(response.data[0])
                    setLoading(true)
                    console.log(response.data[0].ok.content.markup)
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
                            {document.source.name}
                        </Link>
                    </div>
                    <div className={styles.heading}>
                        <h3>{document.title.text}</h3>
                        <span>
                        <p>Технические новости</p>
                    </span>
                    </div>
                    <img className={styles.img} src={iMg}/>
                    <div className={styles.text}>
                        <xml>
                            {document.content.markup}
                        </xml>


                    </div>
                    <div className={styles.article_footer}>
                        <Link to={document.url}>
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