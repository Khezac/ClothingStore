import styles from './ProfileMenu.module.css'

import { Link, useNavigate } from 'react-router-dom'


function ProfileMenu({ setToggleProfile,setVisible }) {

    const navigate = useNavigate()

    function handleBlurTime(){
        setTimeout(handleBlur,80)
    }
    function handleBlur(){
        setToggleProfile(false)
    }

    // Desloga a conta do site
    function logOff() {
        localStorage.removeItem('checkUser')
        navigate("/")
        window.location.reload()
    }

    return (
        <div className={styles.profile_menu} onMouseLeave={handleBlurTime} >
            <Link to='/profile'><p>Perfil</p></Link>
            <p onClick={logOff}>Sair</p>
        </div>
    )
}

export default ProfileMenu