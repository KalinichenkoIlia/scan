
import styles from '../../../styles/UI/InputField.modules.css'

export const InputField = ({label, type, value, onChange , name , error}) => (
    <label className={styles.label}>
        {label}
        <input  className={styles.input}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete='on'
            required
        />
    </label>
);