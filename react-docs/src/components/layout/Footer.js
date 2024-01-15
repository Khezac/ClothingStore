import Separator from './Separator';

import footerlogo from '../../img/logo/logowriting.png' 
import { FaGithub ,FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.css'

import { Link } from 'react-router-dom'

function Footer(){
    return (
        <div className={styles.footer_wrapper}>
            <Separator/>
            <div className={styles.footer_container}>
                <img className={styles.footer_logo}src={footerlogo} alt='footer_logo'/>
                <div className={styles.footer_info}>
                    <ul className={styles.footer_list}>
                        <li className={styles.item}><strong>Institucional</strong></li>
                        <li className={styles.item}>Politica de privacidade</li>
                        <li className={styles.item}>Regulamentos</li>
                        <Link to='/sobre'><li className={styles.item}>Sobre</li></Link>
                    </ul>
                    <ul className={styles.footer_list}>
                        <li className={styles.item}><strong>Ajuda</strong></li>
                        <li className={styles.item}>Trocas e Devoluções</li>
                        <li className={styles.item}>Entregas</li>
                        <li className={styles.item}>Minha Conta</li>
                        <li className={styles.item}>Meus pedidos</li>
                        <li className={styles.item}>Pagamentos</li>
                        <li className={styles.item}>Cancelamentos</li>
                    </ul>
                    <ul className={styles.footer_list}>
                        <li className={styles.item}><strong>Central de Atendimento</strong></li>
                        <li>
                            <Link to='/atendimento'>
                                <button type="button" className="btn btn-outline-primary">Tire suas dúvidas</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_socialmedia}>
                    <a href='https://www.github.com/khezac/' rel="noreferrer" target='_blank'><FaGithub className={styles.social_media_logo}/></a>
                    <a href='https://www.linkedin.com/in/khezac/' rel="noreferrer" target='_blank'><FaLinkedin className={styles.social_media_logo}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;