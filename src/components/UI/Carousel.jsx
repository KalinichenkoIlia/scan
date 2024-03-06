import * as React from "react";
import {Children, cloneElement, useEffect, useState} from "react";
import right from '../../images/icons8-шеврон-влево-90 1.svg'
import left from '../../images/icons8-шеврон-вправо-90 2.svg'
import style from '../../styles/UI/Carousel.module.css'

const PAGE = 400;
function Carousel(props) {
    const {children} = props;
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const handleLeftClick = () => {
        setOffset((currentOffset) => {console.log(currentOffset)

            return currentOffset + PAGE

        });
    };
    const handRightClick = () => {
        setOffset((currentOffset) => {
            console.log(currentOffset)
            return currentOffset - PAGE
        });
    };
    useEffect(() => {
        setPages(
           Children.map(children, child => {
               return cloneElement(child, {
                   style: {
                       maxWidth:`${PAGE}px`,
                       minWidth:`${PAGE}px`
                   }
               })
           })
        )
    },[props])

    return (
        <div className={style.carousel_container}>
            <div onClick={handleLeftClick} className={style.button}><img src={right} alt='icon_right'/></div>
            <div className={style.window} >


                <div style={{transform:`translateX(${offset}px)`,}} className={style.section}>
                    {pages}
                </div>



            </div>
            <div onClick={handRightClick} className={style.button}><img src={left} alt='icon_left'/></div>
        </div>


    );
}

export default Carousel;