import Input from "../form/Input";
import TextArea from "../form/TextArea";
import styles from './Atendimento.module.css'
import SubmitBtn from '../form/SubmitBtn'

function Atendimento() {

    return (
    <div className={styles.atendimento_wrapper}>
        <h1>Entre em Contato</h1>
        <form className={styles.form}>
            <Input type='text' name='nome' placeholder='Insira seu nome completo...' label='Nome' />
            <Input type='email' name='email' placeholder='Insira seu e-mail...' label='E-mail'/>
            <Input type='number' name='telefone' placeholder='Ex: 55999998888' label='Telefone'/>
            <Input type='text' name='assunto' placeholder='Insira o assunto...' label='Assunto'/>
            <TextArea nome='details' placeholder='Descrição do assunto...' label='Detalhes'/>
            <SubmitBtn/>
        </form>
    </div>
    );
}

export default Atendimento;