import {Field, ErrorMessage as Error} from "formik";
import styles from '../../../styles/UI/Input.modules.css'

export const Input = ({id, label, name, placeholder ,type}) => {
    return <div className={styles.wrapper}>

        <label   htmlFor={id} >{label}</label>

        <Field   name={name} id={id}   type={type}>
            {({
                field,
                meta: { touched, error,  }
            }) => <input placeholder={placeholder} className={touched && error ? styles.input_error : styles.input} {...field}/>
            }
        </Field>

        <Error name={name}>{(error) => <span className={styles.span}>{error}</span>}</Error>

    </div>
}