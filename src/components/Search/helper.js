import * as Yup from  'yup'


const isINNLegalEntity = (value)  => {
    const valueToString = value ? value.toString() : ''
    const getN = (index)  => (parseInt(valueToString[index]))
    if(valueToString.length === 10){
        const dgt10 = ((
            2 * getN(0) + 4 * getN(1) + 10 * getN(2) +
            3 * getN(3) + 5 * getN(4) + 9 * getN(5) +
            4 * getN(6) + 6 * getN(7) + 8 * getN(8)
        ) % 11) % 10
        return (getN(9) === dgt10)
    }
    return false
}

const inn = Yup.string()
    .required( 'Обязательное поле')
    .matches(/^[0-9]+$/ , 'Введите корректные данные')
    .min(10 ,'Введите 10 цифр' )
    .max(10,'Введите 10 цифр')
    .test('innValid', 'Неверный ИНН', value => isINNLegalEntity(value))

const limit = Yup.number()
    .required('Обязательное поле')
    .typeError('Введите число ')
    .min(1, 'Введите значение от 1 до 1000')
    .max(1000, 'Введите значение от 1 до 1000')

const tonality = Yup.string()


export const schemas = {
    custom: Yup.object().shape({
        inn,
        limit,
        tonality,
    })
}
export const initialValues = {
    inn : '',
    limit: '',
    tonality: 'any',




}
