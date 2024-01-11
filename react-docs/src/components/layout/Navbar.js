import styles from './Navbar.module.css'
import logo from '../../../src/img/logo/logo1.png'

import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

import Container from './Container';

function Navbar(){

    return(
        <Container className={styles.nav_container}>
        <nav className={styles.navbar}>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt='logo'/>
            </Link>
            <div className={styles.list_nav_options}>
                <ul className={styles.list}>
                    <li className={styles.search_bar_wrapper}>
                        <div className={styles.search_bar}>
                            <input type='text' placeholder='Pesquise por um produto...'/>
                            <a href='/' className={styles.btn_search}><FaSearch/></a>
                        </div>
                    </li>
                    <Link to='/sobre'><li className={styles.list_item}>Sobre</li></Link>
                    <Link to='/atendimento'><li className={styles.list_item}>Atendimento</li></Link>
                </ul>
            </div>
            <div className={styles.list_rightside_options}>
                <ul className={styles.list}>
                    {/* <li className={styles.list_item}>Carrinho</li> 
                        Esta tag só deve aparecer quando o usuário estiver logado*/}
                    {/* <li className={styles.list_item}>Perfil</li> 
                        Esta tag só deve aparecer quando o usuário estiver logado*/}
                    <Link to='/login'><li className={styles.list_item}>Login</li></Link>
                    <Link to='/cadastro'><li className={styles.list_item}>Cadastro</li></Link>
                </ul>
            </div>
        </nav>
        </Container>
)}

export default Navbar