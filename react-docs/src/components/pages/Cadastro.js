import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Cadastro.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Cadastro({userData}) {

    const navigate = useNavigate()// Usado no fim do fetch para ir a pagina de login
    
    const [error,setError] = useState(false)// Sinaliza o erro no input de confirmação de senha

    const [user,setUser] = useState(userData || {})// Armazena as infos dos inputs

    // Altera visibilidade da senha e botão na função togglePasswordVisibility()
    const [passwordVisibility, setPasswordVisibility] = useState('password')
    const [passwordVisibilityBtn,setPasswordVisibilityBtn] = useState('bi bi-eye')
    // Altera visibilidade da confirmação de senha e botão na função toggleCheckPasswordVisibility()
    const [checkPasswordVisibility, setCheckPasswordVisibility] = useState('password')
    const [checkPasswordVisibilityBtn,setCheckPasswordVisibilityBtn] = useState('bi bi-eye')

    // Capta as informações dos inputs e armazena no state de usuario
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

    // Valida a confirmação de senha
    function submit(e){
        e.preventDefault()
        if (user.confirmar_senha !== user.senha){
            setError(true)
            return
        }
        sendUser(user)
    }

    // Altera a visibilidade da senha e o botão
    function togglePasswordVisibility(){
        if (passwordVisibility == 'password'){
            setPasswordVisibility('text')
            setPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (passwordVisibility == 'text'){
            setPasswordVisibility('password')
            setPasswordVisibilityBtn('bi bi-eye')
        }
    }

    // Altera a visibilidade da confirmação senha e o botão
    function toggleCheckPasswordVisibility(){
        if (checkPasswordVisibility == 'password'){
            setCheckPasswordVisibility('text')
            setCheckPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (checkPasswordVisibility == 'text'){
            setCheckPasswordVisibility('password')
            setCheckPasswordVisibilityBtn('bi bi-eye')
        }
    }

    // Manda o usuário criado para o backend
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