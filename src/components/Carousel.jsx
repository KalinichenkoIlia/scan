import * as React from "react";
import styles from '../styles/Carousel.module.css'


import iconMagnifier from '../images/carousel/Mask group.svg'
import iconWatch from '../images/carousel/Mask group (2).svg'
import iconShield from '../images/carousel/Mask group (1).svg'



function Carousel() {

    const getBox = () => {
        return document.querySelector(`.${styles.carousel_container}`)
    };
    const handleLeftClick = () => {
        const box = getBox();
        const width =  box.clientWidth;
        box.scrollLeft = box.scrollLeft + width ;
    };
    const handRightClick = () => {
        const box = getBox();
        const width =  box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.button_left} onClick={handleLeftClick}></button>
            <div className={styles.carousel_container}>
                <div className={styles.carousel_card}>
                    <img src={iconMagnifier} alt={iconMagnifier}/>
                    <h3>Огромная комплексная база</h3>
                    <h3>данных, обеспечивающая </h3>
                    <h3>объективный ответ на запрос</h3>
                </div>
                <div className={styles.carousel_card}>
                    <img src={iconWatch} alt={iconWatch}/>
                    <h3>Высокая и оперативная скорость </h3>
                    <h3>обработки заявки</h3>
                </div>
                <div className={styles.carousel_card}>
                    <img src={iconShield} alt={iconShield}/>
                    <h3>Защита конфеденциальных сведений,</h3>
                    <h3> не подлежащих разглашению по </h3>
                    <h3>федеральному законодательству</h3>
                </div>
                <div className={styles.carousel_card}>
                    <img src={iconMagnifier} alt={iconMagnifier}/>
                    <h3>Огромная комплексная база</h3>
                    <h3>данных, обеспечивающая </h3>
                    <h3>объективный ответ на запрос</h3>
                </div>
                <div className={styles.carousel_card}>
                    <img src={iconWatch} alt={iconWatch}/>
                    <h3>Высокая и оперативная скорость </h3>
                    <h3>обработки заявки</h3>
                </div>
                <div className={styles.carousel_card}>
                    <img src={iconMagnifier} alt={iconMagnifier}/>
                    <h3>Огромная комплексная база</h3>
                    <h3>данных, обеспечивающая </h3>
                    <h3>объективный ответ на запрос</h3>
                </div>
            </div>
            <button className={styles.button_right} onClick={handRightClick}></button>
        </div>
    )
}

export default Carousel;