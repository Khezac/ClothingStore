import styles from './SizeInput.module.css'

function SizeInput({ size }) {
    return (
        <>
            <div className={styles.size_input_container}>
                <label className={styles.size_label} htmlFor={`size_${size}`}>{size}</label>
                <input className={styles.size_input} type='radio' id={`size_${size}`} name='size_radio' value={size} required />
            </div>
        </>
    )
}

export default SizeInput;