import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Cadastro.module.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Cadastro({ userData }) {

    const navigate = useNavigate()// Usado no fim do fetch para ir a pagina de login

    const [error, setError] = useState(false)// Sinaliza o erro no input de confirmação de senha

    const [user, setUser] = useState(userData || {})// Armazena as infos dos inputs

    // Altera visibilidade da senha e botão na função togglePasswordVisibility()
    const [passwordVisibility, setPasswordVisibility] = useState('password')
    const [passwordVisibilityBtn, setPasswordVisibilityBtn] = useState('bi bi-eye')
    // Altera visibilidade da confirmação de senha e botão na função toggleCheckPasswordVisibility()
    const [checkPasswordVisibility, setCheckPasswordVisibility] = useState('password')
    const [checkPasswordVisibilityBtn, setCheckPasswordVisibilityBtn] = useState('bi bi-eye')

    // Capta as informações dos inputs e armazena no state de usuario
    function handleEmail(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        setUser({ ...user, id: e.target.value })
    }
    function handlePassword(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function handleCheckPassword(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        setError(false)
    }
    function handleNome(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function handleCep(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // Valida a confirmação de senha
    function submit(e) {
        e.preventDefault()
        if(user.id && user.senha && user.confirmar_senha){
            if(user.id !== '' && user.senha !== '' && user.confirmar_senha !== '' ){
                if (user.confirmar_senha === user.senha) {
                    sendUser(user)
                } else {
                    setError(true)
                    return
                }
            } else {
                alert('Os campos precisam ser preenchidos!')
                return
            }
        } else {
            alert('Existem campos incorretos ou vazios, preencha todos!')
            return
        }
        console.log(user)
        // sendUser(user)
    }

    // Altera a visibilidade da senha e o botão
    function togglePasswordVisibility() {
        if (passwordVisibility === 'password') {
            setPasswordVisibility('text')
            setPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (passwordVisibility === 'text') {
            setPasswordVisibility('password')
            setPasswordVisibilityBtn('bi bi-eye')
        }
    }

    // Altera a visibilidade da confirmação senha e o botão
    function toggleCheckPasswordVisibility() {
        if (checkPasswordVisibility === 'password') {
            setCheckPasswordVisibility('text')
            setCheckPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (checkPasswordVisibility === 'text') {
            setCheckPasswordVisibility('password')
            setCheckPasswordVisibilityBtn('bi bi-eye')
        }
    }

    // Manda o usuário criado para o backend
    function sendUser(user) {
        fetch("http://localhost:5000/usuarios", {
            method: 'POST',
            headers: { 'Content-type': 'application/json', },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                const state = { message: "Usuário criado com sucesso!" };
                navigate("/login", { state })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.cadastro_wrapper}>
            <h1>Registrar</h1>
            <form onSubmit={submit} className={styles.form_wrapper}>
                <div className={styles.form_container}>
                    <div className={styles.left_info}>
                        <div className={styles.input_container}>
                            <Input
                                type='email'
                                name='email'
                                placeholder='Insira seu e-mail...'
                                label='Usuário'
                                onChange={handleEmail}
                                required
                            />
                        </div>

                        <div className={styles.input_container}>
                            <Input
                                type={passwordVisibility}
                                name='senha'
                                placeholder='Crie sua senha...'
                                label='Senha'
                                onChange={handlePassword}
                                required
                            />
                            <i className={passwordVisibilityBtn} style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}></i>
                        </div>

                        <div className={styles.checkpassword_container}>
                            <div className={styles.input_container}>
                                <Input
                                    type={checkPasswordVisibility}
                                    name='confirmar_senha'
                                    placeholder='Insira sua senha novamente...'
                                    label='Confirmar senha'
                                    onChange={handleCheckPassword}
                                    required
                                />
                                <i className={checkPasswordVisibilityBtn} style={{ cursor: 'pointer' }} onClick={toggleCheckPasswordVisibility}></i>

                            </div>
                            {error && (<p className={styles.password_error}>As senhas precisam ser iguais!</p>)}
                        </div>
                    </div>
                    <div className={styles.right_info}>
                        <div className={styles.input_container}>
                            <Input
                                type='text'
                                name='nome'
                                placeholder='Insira seu nome...'
                                label='Nome'
                                onChange={handleNome}
                            />
                        </div>

                        <div className={styles.input_container}>
                            <Input
                                type='tel'
                                name='cep'
                                placeholder='Insira seu cep...'
                                label='CEP'
                                onChange={handleCep}
                            />
                        </div>
                        <SubmitBtn />
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Cadastro;