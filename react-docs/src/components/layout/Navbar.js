import Container from './Container.js'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar(){
    return(
        <div className={styles.navbar_wrapper}>
                <nav className={styles.navbar}>
                    <img className={styles.logo} src={logo} alt='logo'/>
                    <div className={styles.list_nav_options}>
                        <ul className={styles.list}>
                            <li className={styles.list_item}>Home</li>
                            <li className={styles.list_item}>Produtos</li>
                            <li className={styles.list_item}>Carrinho</li>
                        </ul>
                    </div>
                    <div className={styles.list_signup_options}>
                        <ul className={styles.list}>
                            <li className={styles.list_item}>Entrar</li>
                            <li className={styles.list_item}>Cadastrar</li>
                        </ul>
                    </div>
                </nav>
        </div>
    
)}

export default Navbar