import { Link } from 'react-router-dom'
import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Login.module.css'

function Login() {
    return (
        <div className={styles.login_wrapper}>
            <h1>Login</h1>
            <form className={styles.form_wrapper}>
                <Input type='email' name='email' placeholder='Insira seu e-mail...' label='Usuário' />
                <Input type='password' name='senha' placeholder='Insira sua senha...' label='Senha' />
                <SubmitBtn/>
                <Link to='/alterarsenha1'>Esqueci minha senha</Link>
            </form>
        </div>
    );
}

export default Login;