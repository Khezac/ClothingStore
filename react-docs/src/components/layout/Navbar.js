import styles from './Navbar.module.css'
import logo from '../../../src/img/logo/logo1.png'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import Container from './Container';
import Separator from './Separator';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import ProfileButton from './ProfileButton';
import ProfileMenu from './ProfileMenu';

function Navbar() {

    const navigate = useNavigate()

    // Resultado da barra de pesquisa e alternancia de visibilidade 
    const [results,setResults] = useState([])
    const [toggleFocus, setToggleFocus] = useState(false)
    const [toggleProfile, setToggleProfile] = useState(false)

    // Checa se tem alguém logado e altera a visibilidade dos botões de perfil e de carrinho
    const logged = JSON.parse(localStorage.getItem('checkUser'))

    return (
        <Container className={styles.nav_container}>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt='logo' />
                </Link>
                <div className={styles.list_nav_options}>
                    <ul className={styles.list}>
                        <li className={styles.search_bar_wrapper}>
                            <SearchBar setToggleFocus={setToggleFocus} setResults={setResults}/>
                            {results && results.length > 0 && toggleFocus && <SearchResult results={results} />}
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
                                <ProfileButton setToggleProfile={setToggleProfile}/>{/*Perfil*/}
                                {toggleProfile && (
                                    <ProfileMenu setToggleProfile={setToggleProfile}/>
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