import styles from './Input.module.css'

function Input({ type, name, placeholder, label, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br />
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete="off"
                onChange={onChange}
            />
        </div>
    )
}

export default Input