import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Cadastro.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Cadastro({userData}) {

    const navigate = useNavigate()

    const [visible,setVisible] = useState(false)
    const [user,setUser] = useState(userData || {})

    function handleEmail(e){
        setUser({...user, [e.target.name]: e.target.value})
        setUser({...user, id: e.target.value})
    }

    function handlePassword(e){
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user.senha)
    }

    function handleCheckPassword(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        if (user.confirmar_senha !== user.senha){
            setVisible(true)
            return
        }
        sendUser(user)
    }

    function sendUser(user) {
        fetch("http://localhost:5000/usuarios", {
            method: 'POST',
            headers: {'Content-type': 'application/json',},
            body: JSON.stringify(user),
        })
        .then((resp) => resp.json())
        .then((data) => {
                console.log(data)
                navigate("/login")
            })
        .catch((err) => console.log(err))
        console.log(user)
    }


    return (
        <div className={styles.cadastro_wrapper}>
            <h1>Registrar</h1>
            <form onSubmit={submit} className={styles.form_wrapper}>
                <Input 
                    type='email' 
                    name='email' 
                    placeholder='Insira seu e-mail...' 
                    label='Usuário' 
                    onChange={handleEmail}
                />

                <Input 
                    type='password' 
                    name='senha' 
                    placeholder='Crie sua senha...' 
                    label='Senha' 
                    onChange={handlePassword}
                />

                <div className={styles.checkpassword_container}>
                    <Input 
                        type='password' 
                        name='confirmar_senha' 
                        placeholder='Insira sua senha novamente...' 
                        label='Confirmar senha' 
                        onChange={handleCheckPassword}
                    />
                    {visible && (<p className={styles.password_error}>As senhas precisam ser iguais!</p>)}
                </div>
                <SubmitBtn/>
            </form>
        </div>
    );
}

export default Cadastro;