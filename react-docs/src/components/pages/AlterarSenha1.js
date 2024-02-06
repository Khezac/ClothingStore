import Input from "../form/Input"

import styles from './AlterarSenha1.module.css'

import { useState } from 'react'
import emailjs from 'emailjs-com'

function AlterarSenha1(){

    const[email,setEmail] = useState()

    function handleEmail(e){
        setEmail({...email, [e.target.name]: e.target.value})   
    }

    return (
        <div className={styles.alterar_senha1_wrapper}>
            <h1>Confirme seu e-mail</h1>
            <form className={styles.form_wrapper}>
                <Input type='email' name='confirm_email' placeholder='Insira o e-mail da conta...' onChange={handleEmail}/>
                <p>Enviaremos um e-mail de confirmação.</p>
            </form>   
        </div>
    )
}

export default AlterarSenha1