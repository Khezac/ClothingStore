import { Link, useLocation } from 'react-router-dom'
import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
import Message from '../layout/Message';

function Login() {

    const [checkUser, setCheckUser] = useState([])// Cria um usuário para validação com a API
    const [users, setUsers] = useState([])// Armazena os usuários da API
    const [showError, setShowError] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState('password')
    const [passwordVisibilityBtn, setPasswordVisibilityBtn] = useState('bi bi-eye')

    const navigate = useNavigate()// redirecionará a pessoa pra uma outra page caso o login seja completo

    // Pega as informações da fake api e armazena na state
    useEffect(() => {
        fetch('http://localhost:5000/usuarios', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => console.log(err))
    }
        , [])

    // Captação das infos dos inputs e armazenamento nas states
    function handleEmail(e) {
        setCheckUser({ ...checkUser, id: e.target.value })
    }
    function handlePassword(e) {
        setCheckUser({ ...checkUser, [e.target.name]: e.target.value })
    }

    // Aciona a função de validação
    function submit(e) {
        e.preventDefault()
        users.some(checkInputUserId)
    }

    // Função de validação
    function checkInputUserId(element, index, array) {
        const checkUserId = checkUser.id
        const userId = element.id;
        const checkUserPassword = checkUser.senha
        const userPassword = element.senha;

        if (userId === checkUserId && userPassword === checkUserPassword) {
            localStorage.setItem('checkUser',JSON.stringify(checkUser))
            const state = { status: 'logado' }
            navigate('/', { state })
            window.location.reload() 
        } else if (index === array.length - 1) {
            setShowError(true)
            const timer = setTimeout(() => {
                setShowError(false)
            }, 3000);
            return () => clearTimeout(timer)
        }
    }

    // Usado para exibir mensagem de cadastro completo vindo da page de registro
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    function togglePasswordVisibility(){
        if (passwordVisibility === 'password'){
            setPasswordVisibility('text')
            setPasswordVisibilityBtn('bi bi-eye-slash')
        } else if (passwordVisibility === 'text'){
            setPasswordVisibility('password')
            setPasswordVisibilityBtn('bi bi-eye')
        }
    }

    return (
        <div className={styles.login_wrapper}>
            {message && <Message type='success' msg={message} />}
            {showError && <Message type='error' msg='Usuário e/ou senha incorreto' />}
            <h1>Login</h1>
            <form onSubmit={submit} className={styles.form_wrapper}>
                <Input type='email' name='email' placeholder='Insira seu e-mail...' label='Usuário' onChange={handleEmail} />
                <div className={styles.input_container}>
                    <Input type={passwordVisibility} name='senha' placeholder='Insira sua senha...' label='Senha' onChange={handlePassword} />
                    <i className={passwordVisibilityBtn} style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}></i>
                </div>
                <SubmitBtn />
                <Link to='/alterarsenha1'>Esqueci minha senha</Link>
            </form>
        </div>
    );
}

export default Login;