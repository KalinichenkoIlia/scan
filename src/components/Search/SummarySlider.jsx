import React from "react";
import Slider from "react-slick";
import {settingsSlider} from '../../data/data'
import styles from '../../styles/SummarySlider.module.css';
import {Loader} from "../UI/Loader";


function SummarySlider(props) {
    let keys = Object.keys(props.data);

    return (
        <div className={styles.slider_container}>
            <div className={styles.left_part}>
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
            </div>
            {!props.isLoaded ? <Loader fontSize='6px'/> :
                <Slider  {...settingsSlider}>
                    {keys.map((key) => (
                        <div key={key} className={styles.box}>
                            <div className={styles.content_box}>
                                <span></span>
                                <div className={styles.content_box_text}>
                                    <p>{key.split('-').reverse().join('.')}</p>
                                    <p>{props.data[key].totalDocuments}</p>
                                    <p>{props.data[key].riskFactors}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>}
        </div>
    )
}

export default SummarySlider;