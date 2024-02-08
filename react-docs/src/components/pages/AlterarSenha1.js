import Input from "../form/Input"
import Message from '../layout/Message';

import styles from './AlterarSenha1.module.css'

import { useState } from 'react'
import emailjs from 'emailjs-com'

function AlterarSenha1() {

    const [email, setEmail] = useState('')
    const [typeMessage, setTypeMessage] = useState('')
    const [message,setMessage] = useState('')
    const link = 'localhost:3000/alterarsenha2'
    const reply = 'khezac1@gmail.com'

    function handleEmail(e) {
        setEmail(e.target.value)    
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleFetch(email)
    }

    function handleFetch(value){
        fetch(`https://clothingstore-api.vercel.app/usuarios/${value}`,{
            method:'GET',
            headers: {'Content-Type':'application/json',},
        }).then((resp) => {
            if(resp.status === 200){
                sendEmail()
            } else {
                setTypeMessage('error')
                setMessage('Email não registrado.')
            }

        })
    }

    function sendEmail() {
        if(email !== ''){
        var templateParams = {
            useremail: email,
            link: link,
            reply_to: reply
        }
        emailjs.send('service_email', 'template_sendemail', templateParams, 'HDY0WHREcsmEFpnOL')
            .then(
                (resp) => {
                    console.log('success', resp.status, resp.text)
                    setMessage('Email enviado! Confira sua caixa de emails.')
                    setTypeMessage('success')
                },
                (err) => {
                    console.log('error', err)
                    setMessage('Algo deu errado! Email inválido.')
                    setTypeMessage('error')
                })
    } else {
        return
    }}

    return (
        <div className={styles.alterar_senha1_wrapper}>
            <h1>Confirme seu e-mail</h1>
            <form onSubmit={handleSubmit} className={styles.form_wrapper}>
            {message !== '' && <Message type={typeMessage} msg={message} />}
                <Input type='email' name='confirm_email' placeholder='Insira o e-mail da conta...' onChange={handleEmail} />
                <p>Enviaremos um e-mail de confirmação.</p>
                <button className="btn btn-primary">Confirmar Email</button>
            </form>
        </div>
    )
}

export default AlterarSenha1