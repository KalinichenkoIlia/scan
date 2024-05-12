import React, {useState} from "react";
import Checkbox from "./Checkbox";
import {Input} from "../UI/input/Input";
import {Formik, Form, Field} from "formik";
import {initialValues, schemas} from "./helper";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from '../../styles/FormRequestParameters.modules.css';

function FormRequestParameters(props) {

    const [startDate, setStartDate] = useState(new Date('10.09.2021').toJSON());
    const [endDate, setEndDate] = useState(new Date().toJSON());


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={(values) => props.setValue({startDate: startDate, endDate: endDate, values: values})}>
            {({dirty, isValid}) => (
                <Form className={styles.form}>
                    <section className={styles.section_input}>
                        <Input t
                               id='inn'
                               name='inn'
                               label='ИНН компании*'
                               placeholder='10 цифр'
                        />
                        <label className={styles.tonality}>
                            Тональность
                            <Field as="select" htmlFor="tonality" name="tonality" id="tonality">
                                <option value='any'>Любая</option>
                                <option value='positive'>Позитивная</option>
                                <option value='negative'>Негативная</option>
                            </Field>
                        </label>

                        <Input
                            id="limit"
                            name="limit"
                            label='Количество документов в выдаче*'
                            placeholder='От 1 до 1000'
                        />
                        <div className={styles.date}>
                            <p>Диапазон поиска*</p>
                            <div>
                                <div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(new Date(date).toJSON())}
                                        dateFormat='dd.MM.yyyy'
                                        name='startDate'
                                        id='startDate'
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        errorText="This is an error message."
                                        maxDate={Date().toString()}
                                        required

                                    />
                                </div>
                                <div>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(new Date(date).toJSON())}
                                        dateFormat='dd.MM.yyyy'
                                        name='endDate'
                                        id='endDate'
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        maxDate={new Date().toJSON()}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={styles.wrapper_checkbox}>
                        <Checkbox/>
                        <div>
                            <button onClick={props.openSearch} disabled={!(dirty && isValid)} className={styles.button}
                                    type='submit'>Поиск
                            </button>
                            <p>* Обязательные к заполнению поля</p>
                        </div>

                    </div>

                </Form>
            )}

        </Formik>

    );
}

export default FormRequestParameters;
