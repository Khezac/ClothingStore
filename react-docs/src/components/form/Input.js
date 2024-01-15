import styles from './Input.module.css'

function Input ({type,name,placeholder,label}){
    return (
        <div>
        <label htmlfor={name}>{label}</label>
        <br/>
        <input className={styles.input}type={type} name={name} placeholder={placeholder}></input>
        </div>
    )
}

export default Input