import Container from './Container.js'
import Separator from './Separator'

import styles from './Navbar.module.css'
import logo from '../../../src/img/logo/logo1.png'

import { FaSearch } from "react-icons/fa";

function Navbar(){

    return(
        <div className={styles.navbar_wrapper}>
                <nav className={styles.navbar}>
                    <img className={styles.logo} src={logo} alt='logo'/>
                    <div className={styles.list_nav_options}>
                        <ul className={styles.list}>
                            <li className={styles.list_item}>
                                <div className={styles.search_bar}>
                                    <input type='text' placeholder='Pesquise por um produto...'/>
                                    <a className={styles.btn_search}><FaSearch/></a>
                                </div>
                            </li>
                            <li className={styles.list_item}>Home</li>
                            <li className={styles.list_item}>Sobre</li>
                        </ul>
                    </div>
                    <div className={styles.list_rightside_options}>
                        <ul className={styles.list}>
                            <li className={styles.list_item}>Carrinho</li>
                            <li className={styles.list_item}>Perfil</li>
                        </ul>
                    </div>
                </nav>
        </div>
    
)}

export default Navbar