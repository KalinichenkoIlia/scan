import React, {useEffect} from "react";
import Slider from "react-slick";
import {settingsSlider} from '../../data/data'
import styles from '../../styles/SummarySlider.module.css';
import {Loader} from "../UI/Loader";


function SummarySlider(props) {
    console.log(props.data.data)
    let newData = {}

    useEffect(() => {


        if (props.data.data) {

            newData = props.data.data[0].data.map(function (el) {

                return {[el.date.substring(0, 10)]: {totalDocuments: el.value}}
            })


            console.log(newData);


        }
    }, [props.data])

    return (
        <div className={styles.slider_container}>
            <div className={styles.left_part}>
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
            </div>
            {!props.isLoaded ? <Loader fontSize='6px'/> :
                <Slider  {...settingsSlider}>
                    <div className={styles.box}>
                        <div className={styles.content_box}>
                            <span></span>
                            <div className={styles.content_box_text}>
                                <p>17.09.9999</p>
                                <p>25</p>
                                <p>6</p>
                            </div>
                        </div>
                    </div>

                </Slider>}


        </div>
    )
}

export default SummarySlider;