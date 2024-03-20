import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import {useState} from "react";
import styles from "../../styles/UI/Input.modules.css";



export const DatePickerField = ({ ...props }) => {
    const [startDate, setStartDate] = useState(new Date("01/02/2022"));
    const [endDate, setEndDate] = useState(new Date(new Date().toJSON().slice(0, 10).replace(/-/g, '/')));

    const [field] = useField(name='startDate',name='endDate');
    return (
        <>
            <DatePicker
                {...field}
                {...props}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='dd/MM/yyyy'
                name='startDate'
                id='startDate'
                selectsStart
                startDate={startDate}
                endDate={endDate}
            >

            </DatePicker>
            {({
                  field,
                  meta: { touched, error,  }
              }) => <span className={touched && error ? error : ''} {...field}/>
            }
            <DatePicker
                {...field}
                {...props}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat='dd/MM/yyyy'
                name='endDate'
                id='endDate'
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}/>
        </>

    );
};