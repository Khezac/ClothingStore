import styles from './GenderInput.module.css'

function GenderInput({gender,onChange}) {
    return (
        <>
            <div className={styles.gender_input_container}>
                <label className={styles.gender_label} htmlFor={`${gender}`}>{gender}</label>
                <input className={styles.gender_input} type='radio' id={`${gender}`} name='genero' value={gender} required onChange={onChange}/>
            </div>
        </>
    )
}

export default GenderInput