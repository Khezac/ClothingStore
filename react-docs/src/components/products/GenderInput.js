import styles from './GenderInput.module.css'

function GenderInput({gender}) {
    return (
        <>
            <div className={styles.gender_input_container}>
                <label className={styles.gender_label} htmlFor={`${gender}`}>{gender}</label>
                <input className={styles.gender_input} type='radio' id={`${gender}`} name='gender_radio' value={`${gender}`} required />
            </div>
        </>
    )
}

export default GenderInput