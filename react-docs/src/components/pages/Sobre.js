import logo from '../../img/logo/logo1.png'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <div className={styles.about_wrapper}>
            <div className={styles.about_container}>
                <img className={styles.about_logo} src={logo} alt='sobre_logo'/>
                <div className={styles.about_info}>
                    <p>
                        A <strong>ClothingStore</strong> é uma loja de roupas e acessórios com coleções variadas e diversas, onde a nossa prioridade é sempre oferecer o melhor atendimento e o maior conforto ao cliente, seja com relação a qualidade do produto ou em relação a praticidade de compra e contato.
                    </p>
                    <p>
                        Criado em 2024 por Khezac Khalleb.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;