import React, {useEffect, useState} from "react";
import Document from "./Document";
import styles from '../../styles/ListDocuments.modules.css'

function ListDocuments(props) {
    const [listItem, setListItem] = useState(10);

    let keys = Object.keys(props.documentsId.items);
    console.log(keys.length)

    return (
        <div className={styles.list_documents}>

            {keys.slice(listItem - 10, listItem).map(key => (
                <Document key={key} idDocument={props.documentsId.items[key]}/>
            ))}

            <div>
                {listItem === keys.length ? "" :
                    <button onClick={() => setListItem(listItem + 10)}>Показать больше</button>}
            </div>

        </div>
    )
}

export default ListDocuments;