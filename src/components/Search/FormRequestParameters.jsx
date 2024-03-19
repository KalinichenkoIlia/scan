import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import styles from '../../styles/FormRequestParameters.modules.css';


import {AuthContext} from "../context/Contexts";
import {InputField} from "../UI/input/InputField";


function FormRequestParameters() {
    return(
        <form className={styles.form}>
         <label>
             ИНН компании *
             <input/>
         </label>
            <label>
                Тональность
                <select>
                    <option value=''>Любая</option>
                    <option value='' >Позитивная</option>
                    <option value='' >Негативная</option>
                </select>
            </label>
            <label>
                Количество документов в выдаче
                <input/>
            </label>
            <label>
                Диапазон поиска

            </label>

        </form>
    );
}

export default FormRequestParameters;
