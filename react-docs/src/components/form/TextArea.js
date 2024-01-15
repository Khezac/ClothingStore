import styles from './TextArea.module.css'

function TextArea({name,placeholder,label}){
    return(
        <>
        <label htmlFor={name}>{label}</label>
        <textarea className={styles.text_area}type name={name} placeholder={placeholder}/>
        </>
    )
}

export default TextArea;