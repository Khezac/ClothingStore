import styles from "./ProfileForm.module.css"

function ProfileForm({onChange}){
    return(
        <>
        <input type="text" onChange={onChange}/>
        <input type="number" onChange={onChange}/>
        <input type="number" onChange={onChange}/>
        <input type="email" onChange={onChange}/>
        </>
    )
}

export default ProfileForm