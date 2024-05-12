import React from "react";
import SummarySlider from "./SummarySlider";
import axios from "axios";
import {HISTOGRAMS_URL} from "../../data/data";
import {organizeData} from "./utils";

import styles from '../../styles/GeneralSummary.modules.css';



class GeneralSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            histograms_data: this.props.histograms_data,
            data: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        if (this.props.histograms_data !== prevProps.histograms_data) {

            this.setState({
                histograms_data: prevProps.histograms_data
            })
            let accessToken = localStorage.getItem('accessToken');

            this.getSummary(accessToken)
        }
    }

    getSummary(accessToken) {

        if (accessToken) {
            (async () => {
                await axios.post(
                    HISTOGRAMS_URL,
                    this.props.histograms_data,
                    {
                        headers:
                            {"Authorization": `Bearer ${accessToken}`}
                    })

                    .then(response => {
                        this.setState({
                            data: organizeData(response.data.data),
                            isLoaded: true
                        });
                        this.props.setSummaryLoaded(true)
                    }).catch(error => {
                        console.error(error)
                    })
            })();
        }
    }

    render() {

        return (
            <div className={styles.summary}>
                <h2>Общая сводка</h2>
                <p>Найдено {Object.keys(this.state.data).length} вариантов</p>
                <div className={styles.slider_container}>

                    <SummarySlider data={this.state.data} isLoaded={this.state.isLoaded}/>
                </div>

            </div>
        )
    }


}

export default GeneralSummary;