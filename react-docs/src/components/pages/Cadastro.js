import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Cadastro.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Cadastro({userData}) {

    const navigate = useNavigate()

    const [error,setError] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState('password')
    const [passwordVisibilityBtn,setPasswordVisibilityBtn] = useState('bi bi-eye')
    const [checkPasswordVisibility, setCheckPasswordVisibility] = useState('password')
    const [checkPasswordVisibilityBtn,setCheckPasswordVisibilityBtn] = useState('bi bi-eye')
    const [user,setUser] = useState(userData || {})

    function handleEmail(e){
        setUser({...user, [e.target.name]: e.target.value})
        setUser({...user, id: e.target.value})
    }

    function handlePassword(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleCheckPassword(e){
        setUser({...user, [e.target.name]: e.target.value})
        setError(false)
    }

    function submit(e){
        e.preventDefault()
        if (user.confirmar_senha !== user.senha){
            setError(true)
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

    function togglePasswordVisibility(){
        if (passwordVisibility == 'password'){
            setPasswordVisibility('text')
            setPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (passwordVisibility == 'text'){
            setPasswordVisibility('password')
            setPasswordVisibilityBtn('bi bi-eye')
        }
    }   8

    function toggleCheckPasswordVisibility(){
        if (checkPasswordVisibility == 'password'){
            setCheckPasswordVisibility('text')
            setCheckPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (checkPasswordVisibility == 'text'){
            setCheckPasswordVisibility('password')
            setCheckPasswordVisibilityBtn('bi bi-eye')
        }
    }

    return (
        <div className={styles.cadastro_wrapper}>
            <h1>Registrar</h1>
            <form onSubmit={submit} className={styles.form_wrapper}>
                <div className={styles.input_container}>
                <Input 
                    type='email' 
                    name='email' 
                    placeholder='Insira seu e-mail...' 
                    label='Usuário' 
                    onChange={handleEmail}
                />
                </div>

                <div className={styles.input_container}>
                    <Input 
                        type={passwordVisibility}
                        name='senha' 
                        placeholder='Crie sua senha...' 
                        label='Senha' 
                        onChange={handlePassword}
                    />
                    <i className={passwordVisibilityBtn} style={{cursor: 'pointer'}}onClick={togglePasswordVisibility}></i>
                </div>

                <div className={styles.checkpassword_container}>
                    <div className={styles.input_container}>
                    <Input 
                        type={checkPasswordVisibility}
                        name='confirmar_senha' 
                        placeholder='Insira sua senha novamente...' 
                        label='Confirmar senha' 
                        onChange={handleCheckPassword}
                    />
                    <i className={checkPasswordVisibilityBtn} style={{cursor: 'pointer'}}onClick={toggleCheckPasswordVisibility}></i>

                    </div>
                    {error && (<p className={styles.password_error}>As senhas precisam ser iguais!</p>)}
                </div>
                <SubmitBtn/>
            </form>
        </div>
    );
}

export default Cadastro;