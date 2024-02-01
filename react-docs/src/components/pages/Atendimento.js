import styles from './Atendimento.module.css'

import Input from "../form/Input";
import TextArea from "../form/TextArea";
import SubmitBtn from '../form/SubmitBtn'

import Message from '../layout/Message';

import { useState } from 'react'

function Atendimento() {
    // Armazenamento das informações em state
    const [contactAttempt,setContactAttempt] = useState({})
    const [message,setMessage] = useState('')

    // Envio das informações pras states
    function handleName(e){
        setContactAttempt({...contactAttempt,[e.target.name]: e.target.value})
    }
    function handleEmail(e){
        setContactAttempt({...contactAttempt,id: e.target.value})
    }
    function handleTelephoneNumber(e){
        setContactAttempt({...contactAttempt,[e.target.name]: e.target.value})
    }
    function handleSubject(e){
        setContactAttempt({...contactAttempt,[e.target.name]: e.target.value})
    }
    function handleDetails(e){
        setContactAttempt({...contactAttempt,[e.target.name]: e.target.value})
        console.log(contactAttempt)
    }

    // Manda as informações da state pra API
    function sendContactAttempt(contactAttempt){
        fetch('http://localhost:5000/atendimento', {
            method:'POST', 
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(contactAttempt),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setMessage("Requerimento enviado, enviaremos um e-mail de volta!")// Mostra mensagem de sucesso
    })
        .catch((err) => console.log(err))
    }
    function handleSubmit(e){
        e.preventDefault()
        if(contactAttempt.id){
            sendContactAttempt(contactAttempt)
        } else {
            alert("Preencha todos os campos!")
        }
        
    }

    return (
    <div className={styles.atendimento_wrapper}>
        {message && <Message type='success' msg={message} />}
        <h1>Entre em Contato</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input type='text' name='nome' placeholder='Insira seu nome completo...' label='Nome' onChange={handleName} />
            <Input type='email' name='email' placeholder='Insira seu e-mail...' label='E-mail' onChange={handleEmail}/>
            <Input type='number' name='telefone' placeholder='Ex: 55999998888' label='Telefone' onChange={handleTelephoneNumber}/>
            <Input type='text' name='assunto' placeholder='Insira o assunto...' label='Assunto' onChange={handleSubject}/>
            <TextArea name='details' placeholder='Descrição do assunto...' label='Detalhes' onChange={handleDetails}/>
            <SubmitBtn onSubmit={handleSubmit}/>
        </form>
    </div>
    );
}

export default Atendimento;