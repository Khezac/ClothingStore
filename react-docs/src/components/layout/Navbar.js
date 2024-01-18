import styles from './Navbar.module.css'
import logo from '../../../src/img/logo/logo1.png'

import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'

import Container from './Container';
import Separator from './Separator';

function Navbar() {

    const location = useLocation()
    let status = ''
    if (location.state) {
        status = location.state.status
    }

    return (
        <Container className={styles.nav_container}>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt='logo' />
                </Link>
                <div className={styles.list_nav_options}>
                    <ul className={styles.list}>
                        <li className={styles.search_bar_wrapper}>
                            <div className={styles.search_bar}>
                                <input type='text' placeholder='Pesquise por um produto...' />
                                <a href='/' className={styles.btn_search}><FaSearch /></a>
                            </div>
                        </li>
                        <Link to='/sobre'><li className={styles.list_item}>Sobre</li></Link>
                        <Link to='/atendimento'><li className={styles.list_item}>Atendimento</li></Link>
                    </ul>
                </div>
                <div className={styles.list_rightside_options}>
                    <ul className={styles.list}>
                        {status === 'logado' && (
                            <>
                                <li className={styles.list_item}><i className="bi bi-cart" /></li> {/*Carrinho*/}
                                <li className={styles.list_item}><i className="bi bi-person-circle" /></li> {/*Perfil*/}
                            </>
                        )}
                        {status === '' && (
                            <>
                                <Link to='/login'><li className={styles.list_item}>Login</li></Link>
                                <Link to='/cadastro'><li className={styles.list_item}>Cadastro</li></Link>
                            </>
                        )}


                    </ul>
                </div>
            </nav>
            <Separator />
        </Container>
    )
}

export default Navbar