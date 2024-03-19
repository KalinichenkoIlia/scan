
import styles from '../../../styles/UI/InputField.modules.css'

export const InputField = ({label, type, value, onChange , name , style, className=styles.input}) => (
    <label className={styles.label}>
        {label}
        <input style={style} className={className}
               name={name}
               type={type}
               value={value}
               onChange={onChange}
               autoComplete='on'
               required
        />
    </label>
)



