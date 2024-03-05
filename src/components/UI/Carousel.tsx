import * as React from "react";
import {useEffect, useState, Children, cloneElement} from "react";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
 import style from '../../styles/UI/Carousel.module.css'





const Carousel = () => {

    const prev = () => {
        const box:any = 400
        const wight = box.clientWidth;
        box.scrollLeft = wight - box.scrollLeft;
    }
    const next = () => {
        const box:any = 400
        const wight = box.clientWidth;
        box.scrollLeft = wight + box.scrollLeft;
    }

    return (
        <div>
            <button onClick={prev}>prev</button>
            <div className={style.carousel_container}>
                <div>one</div>
                <div>two</div>
                <div>three</div>
            </div>

            <button onClick={next}>next</button>
        </div>

    );
}

export default Carousel;