import * as Yup from  'yup'
import {mixed, number, ref} from "yup";


const inn = Yup.string()
    .required( 'Обязательное поле')
    .matches(/^[0-9]+$/ , 'Введите корректные данные')
    .min(10 ,'Введите 10 цифр' )
    .max(10,'Введите 10 цифр')

const countDocuments = Yup.number()
    .required('Обязательное поле')
    .typeError('Введите число ')
    .min(1, 'Введите значение от 1 до 1000')
    .max(1000, 'Введите значение от 1 до 1000')

const select = Yup.string()


export const schemas = {
    custom: Yup.object().shape({
        inn,
        countDocuments,
        select,
    })
}
export const initialValues = {
    inn : '',
    countDocuments: '',
    select: 'any',




}