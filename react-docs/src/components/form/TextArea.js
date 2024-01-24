import styles from './TextArea.module.css'

function TextArea({name,placeholder,label,onChange}){
    return(
        <>
        <label htmlFor={name}>{label}</label>
        <textarea className={styles.text_area} name={name} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}

export default TextArea;