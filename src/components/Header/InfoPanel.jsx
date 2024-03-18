import * as React from "react";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {account_info} from "../../data/data";
import styles from '../../styles/InfoPanel.modules.css';
import {AuthContext} from "../context/Contexts";

const accessToken = localStorage.getItem('accessToken');

function InfoPanel() {
    const {isAuthenticated} = useContext(AuthContext);
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
    }, [isAuthenticated]);
    return (
        <div className={styles.panel}>
            <ul>
                <li className={styles.companyLimit}> Использовано компаний <h2>{info.companyLimit}</h2> </li>
                <li className={styles.usedCompanyCount}> Лимит по компаниям <h2>{info.usedCompanyCount}</h2>  </li>
            </ul>
        </div>
    );
}

export default InfoPanel;