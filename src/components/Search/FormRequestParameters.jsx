import React, {useContext, useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";
import axios from "axios";
import styles from '../../styles/FormRequestParameters.modules.css';
import {AuthContext} from "../context/Contexts";
import {Input} from "../UI/input/Input";
import formik, {Formik, Form, useFormik, useField, useFormikContext} from "formik";
import {initialValues, schemas} from "./helper";
import DatePicker from "react-datepicker";
import {CustomButton} from "../UI/button/CustomButton";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {Field, ErrorMessage as Error} from "formik";
import {login_url} from "../../data/data";
import {submit} from "./submit";


function FormRequestParameters() {
    const [startDate, setStartDate] = useState(new Date("01/02/2019"));
    const [endDate, setEndDate] = useState(new Date().toJSON().slice(0, 10).replace(/-/g, '/'));

    return (
        <Formik initialValues={initialValues}
                validationSchema={schemas.custom}
                onSubmit={(values) => {
                    console.log(values)
                }}
        >
            <Form className={styles.form}>
                <section className={styles.section_input}>
                    <Input
                        id='inn'
                        name='inn'
                        label='ИНН компании*'
                        placeholder='10 цифр'
                    />
                    <label className={styles.tonality}>
                        Тональность
                        <select >
                            <option value=''>Любая</option>
                            <option value=''>Позитивная</option>
                            <option value=''>Негативная</option>
                        </select>
                    </label>
                    <Input
                        id='countDocuments'
                        name='countDocuments'
                        label='Количество документов в выдаче*'
                        placeholder='От 1 до 1000'
                    />
                    <div className={styles.date}>
                        <p>Диапазон поиска*</p>
                        <div>
                            <div>
                                <DatePicker

                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    name='startDate'
                                    id='startDate'
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    errorText="This is an error message."
                                    maxDate={endDate}
                                    required

                                />
                            </div>
                            <div>
                                <DatePicker

                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    name='endDate'
                                    id='endDate'
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    maxDate={Date().toString()}
                                    required

                                />
                            </div>
                        </div>

                    </div>
                </section>
                <section className={styles.section_checkbox}>
                    <label>
                        <input type="checkbox"/>
                        <span>Признак максимальной полноты</span>

                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Упоминания в бизнес-контексте</span>
                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Главная роль в публикации</span>
                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Публикации только с риск-факторами</span>
                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Включать технические новости рынков</span>
                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Включать анонсы и календари</span>
                    </label>
                    <label>
                        <input type="checkbox"/>

                        <span>Включать сводки новостей</span>
                    </label>

                    <button type='submit'>Поиск</button>
                </section>
            </Form>
        </Formik>

    );
}

export default FormRequestParameters;
