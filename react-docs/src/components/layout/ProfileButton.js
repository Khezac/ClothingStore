import styles from './ProfileButton.module.css'

function ProfileButton({setToggleProfile}){

    function handleFocus(){
        setToggleProfile(true)
    }

    return(
        <li className={styles.list_item}><i className="bi bi-person-circle" onClick={handleFocus}/></li>
    )
}

export default ProfileButton