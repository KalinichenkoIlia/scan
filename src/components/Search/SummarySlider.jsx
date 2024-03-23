import React from "react";
import Slider from "react-slick";
import { settingsSlider } from '../../data/data'
import styles from '../../styles/SummarySlider.module.css';


function SummarySlider(props){

    return(
        <div className={styles.slider_container}>
            <div className={styles.left_part}>
                    <p>Период</p>
                    <p>Всего</p>
                    <p>Риски</p>
            </div>
            <Slider  {...settingsSlider}>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className={styles.box} >
                    <div className={styles.content_box} >
                        <span></span>
                        <div className={styles.content_box_text}>
                            <p>17.09.9999</p>
                            <p>25</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>

            </Slider>


        </div>
    )
}
export default SummarySlider;