import Input from "../form/Input";
import SubmitBtn from "../form/SubmitBtn";

import styles from './AlterarSenha2.module.css'

function EsqueciMinhaSenha(){
    return(
        <div className={styles.novasenha_wrapper}>
            <h1>Altere sua senha</h1>
            <form className={styles.form_wrapper}>
                <Input type='email' name='email_confirmation' placeholder='Insira seu email...' label='Usurário da conta'/>
                <Input type='password' name='new_password' placeholder='Crie uma nova senha...' label='Nova Senha'/>
                <Input type='password' name='new_password_confirmation' placeholder='Digite a senha novamente...' label='Confirmação'/>
                <SubmitBtn/>
            </form>
        </div>
    )
}

export default EsqueciMinhaSenha;