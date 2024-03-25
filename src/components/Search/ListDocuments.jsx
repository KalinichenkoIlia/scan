import React, {useEffect, useState} from "react";
import Document from "./Document";


function ListDocuments(props) {
    const [listItem, setListItem] = useState(10);

    let keys = []
    useEffect(() => {
        if (props.documentsId.items){
            keys = Object.keys(props.documentsId.items)
        }
    },[])

    return (<div>
            {keys.slice(listItem -10, listItem).map(key => (
                <Document idDicument={props.documentsId.items[key]}/>
            ))}
            <button onClick={() => setListItem(listItem +10 )}>Показать больше</button>
        </div>
    )
}

export default ListDocuments;