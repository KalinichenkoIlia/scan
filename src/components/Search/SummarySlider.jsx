import React, {useEffect} from "react";
import Slider from "react-slick";
import {settingsSlider} from '../../data/data'
import styles from '../../styles/SummarySlider.module.css';
import {Loader} from "../UI/Loader";


function SummarySlider(props) {
    const {data} = props
    let keys;
    let organizeData = {}

    useEffect(() => {

        if (props.data) {

            data[1].data.forEach((el, index) => {
                organizeData[el.date.substring(0, 10)] = {id: index, riskFactors: el.value, totalDocuments: null}
            });

            data[0].data.forEach((el) => {

                organizeData[el.date.substring(0, 10)].totalDocuments = el.value
            })
            keys = Object.keys(organizeData);
            console.log(keys)
        }
    }, [])

    return (
        <div className={styles.slider_container}>
            <div className={styles.left_part}>
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
            </div>
            {!props.isLoaded ? <Loader fontSize='6px'/> :
                <Slider  {...settingsSlider}>

                    {keys.map(key => (<div className={styles.box}>

                            {organizeData[key].map(infoSummary => (

                                <div className={styles.content_box}>

                                    <span></span>

                                    <div className={styles.content_box_text}>

                                        <p>{key}</p>
                                        <p>{infoSummary.totalDocuments}</p>
                                        <p>{infoSummary.riskFactors}</p>

                                    </div>
                                </div>

                            ))}
                        </div>
                    ))}


                </Slider>}


        </div>
    )
}

export default SummarySlider;