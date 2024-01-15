import SubmitBtn from '../form/SubmitBtn';
import Input from "../form/Input";

import styles from './Cadastro.module.css'

function Login() {
    return (
        <div className={styles.cadastro_wrapper}>
            <h1>Registrar</h1>
            <form className={styles.form_wrapper}>
                <Input type='email' name='email' placeholder='Insira seu e-mail...' label='Usuário' />
                <Input type='password' name='senha' placeholder='Crie sua senha...' label='Senha' />
                <Input type='password' name='confirmar_senha' placeholder='Insira sua senha novamente...' label='Confirmar senha' />
                <SubmitBtn/>
            </form>
        </div>
    );
}

export default Login;