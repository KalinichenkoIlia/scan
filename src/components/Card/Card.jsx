import * as React from "react";
import style from '../../styles/Card.module.css'

function Card (props){
    console.log(props.text);

    return(
        <div className={props.className} >
            <div>
                <ul>
                    <h1>{props.nameProdukt}</h1>
                    <h3>{props.text.header}</h3>
                </ul>
                <img src={props.icon} alt='icon'/>
            </div>
            <h2>В тариф входит:</h2>
            <ul className='ul'>
              <h3>{props.text.rate[0]}</h3>
                <h3>{props.text.rate[1]}</h3>
                <h3>{props.text.rate[2]}</h3>
            </ul>
            <button>1233</button>
        </div>
    )
}
export default Card