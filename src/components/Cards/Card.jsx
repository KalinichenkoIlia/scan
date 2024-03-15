import * as React from "react";
import styles from '../../styles/Card.module.css'


function Card(props) {
    return (
        <div className={props.className}>
            <section>
                <ul>
                    <h1>{props.nameProdukt}</h1>
                    <h3>{props.text.header}</h3>
                </ul>
                <img src={props.icon} alt='icon'/>
            </section>
            <div className={styles.tariffs_card}>
                <div className={styles.price_list}>
                    <h4>{props.text.price_list.discount}₽</h4>
                    <del>{props.text.price_list.price} ₽</del>
                </div>
                <h5>{props.text.installment_text}</h5>
                <div className={styles.list_rate}>
                    <h2>В тариф входит:</h2>
                    <ul>
                        <li>{props.text.rate[0]}</li>
                        <li>{props.text.rate[1]}</li>
                        <li>{props.text.rate[2]}</li>
                    </ul>
                </div>
            </div>

            <button>Подробнее</button>
        </div>
    )
}

export default Card