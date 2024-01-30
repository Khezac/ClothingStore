import styles from './Navbar.module.css'
import logo from '../../../src/img/logo/logo1.png'

import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import Container from './Container';
import Separator from './Separator';

function Navbar() {

    const navigate = useNavigate()

    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    const logged = JSON.parse(localStorage.getItem('checkUser'))

    function logOff() {
        localStorage.removeItem('checkUser')
        navigate("/")
        window.location.reload()
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
                        {logged ? (
                            <>
                                <Link to='/profile'><li className={styles.list_item}><i className="bi bi-cart w-100 h-100" /></li></Link> {/*Carrinho*/}
                                <li className={styles.list_item} onClick={toggleVisible}><i className="bi bi-person-circle" /></li> {/*Perfil*/}
                                {visible && (
                                    <div className={styles.profile_menu}>
                                        <Link to='/profile' onClick={toggleVisible}><p>Perfil</p></Link>
                                        <p onClick={logOff}>Sair</p>
                                    </div>
                                )}
                            </>
                        ) : (
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