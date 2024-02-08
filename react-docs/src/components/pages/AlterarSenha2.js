import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../form/Input";
import SubmitBtn from "../form/SubmitBtn";

import styles from './AlterarSenha2.module.css'

import Message from "../layout/Message";

function EsqueciMinhaSenha() {

    const [updatedUser, setUpdatedUser] = useState()
    const [typeMessage, setTypeMessage] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    function handleEmail(e) {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    function handlePassword(e) {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    function handleCheckPassword(e) {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (updatedUser.senha === updatedUser.confirmar_senha) {
            if (updatedUser.senha.length < 8) {
                setTypeMessage('error')
                setMessage('A senha precisa ter um minimo de 8 caracteres!')
            } else {
                updateFetch(updatedUser.email, updatedUser)
            }
        } else {
            setTypeMessage('error')
            setMessage('As senhas precisam ser iguais!')
            return
        }
    }

    function updateFetch(value, updatedValue) {
        fetch(`https://clothingstore-api.vercel.app/usuarios/${value}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(updatedValue)
        }).then(() => {
            setTypeMessage('success')
            setMessage('Senha alterada com sucesso!')
            setTimeout(() => {
                navigate('/login')
            }, 1000);
        })
    }

    return (
        <div className={styles.novasenha_wrapper}>
            <h1>Altere sua senha</h1>
            <form onSubmit={handleSubmit} className={styles.form_wrapper}>
                {message !== '' && <Message type={typeMessage} msg={message} />}
                <Input type='email' name='email' placeholder='Insira seu email...' label='Usurário da conta' onChange={handleEmail} />
                <Input type='password' name='senha' placeholder='Crie uma nova senha...' label='Nova Senha' onChange={handlePassword} />
                <Input type='password' name='confirmar_senha' placeholder='Digite a senha novamente...' label='Confirmação' onChange={handleCheckPassword} />
                <SubmitBtn />
            </form>
        </div>
    )
}

export default EsqueciMinhaSenha;