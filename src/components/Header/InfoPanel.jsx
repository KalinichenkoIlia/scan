import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {account_info} from "../../data/data";
import styles from '../../styles/InfoPanel.modules.css'
import header from "./Header";

const accessToken = localStorage.getItem('accessToken');

function InfoPanel() {
    const [info, getInfo] = useState({});

    useEffect(() => {
        console.log(accessToken)
        if (accessToken) {
            (async () => {
                    await axios.get(
                        account_info,{headers:{"Authorization" : `Bearer ${accessToken}`}})
                        .then(response => {
                            console.log(response.data);
                            getInfo(response.data['eventFiltersInfo']);
                        }).catch(error => {
                            console.error(error)
                        })
                }
            )
            ();
        }
    }, []);
    return (
        <div className={styles.panel}>
            <ul>
                <li> Использовано компаний {info.companyLimit}</li>
                <li> Лимит по компаниям{info.usedCompanyCount}</li>
            </ul>


        </div>
    );
}

export default InfoPanel;