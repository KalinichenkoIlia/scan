import * as React from "react";
import axios from "axios";
import {ACCOUNT_INFO_URL} from "../../data/data";
import styles from '../../styles/InfoPanel.modules.css';
import {Loader} from "../UI/Loader";


class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            info: []
        }
    }

    componentDidMount() {
        this.eventInfo();
    }

    eventInfo() {
        let accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            (async () => {
                    await axios.get(
                        ACCOUNT_INFO_URL, {headers: {"Authorization": `Bearer ${accessToken}`}})
                        .then(response => {
                            this.setState({
                                info: response.data['eventFiltersInfo'],
                                isLoaded: true
                            })
                        }).catch(error => {
                            console.error(error)
                        })
                }
            )
            ();
        }
    }


    render() {
        return (
            <div className={styles.panel}>
                <ul>
                    {!this.state.isLoaded ? <Loader/> :
                        <>
                            <li className={styles.companyLimit}> Использовано
                                компаний <h2>{this.state.info['companyLimit']}</h2></li>
                            <li className={styles.usedCompanyCount}> Лимит по
                                компаниям <h2>{this.state.info['usedCompanyCount']}</h2></li>
                        </>
                    }

                </ul>
            </div>


        );
    }
}

export default InfoPanel;