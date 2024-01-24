import styles from './Profile.module.css'

function Profile() {
    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.personal_info_wrapper}>
                <div className={styles.personal_info_container}>
                    <div className={styles.profile_avatar_container}>
                        <img className={styles.profile_avatar} src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt='profile_image'/>
                    </div>
                    <section className={styles.personal_info}>
                        <div className={styles.name_container}>
                            <h5 className={styles.name}><strong>Nome: </strong></h5>
                            <p>João Gabriel</p>
                        </div>
                        <div className={styles.contact_container}>
                            <h5 className={styles.contact_number}><strong>Telefone: </strong></h5>
                            <p>55 99999-9999</p>
                        </div>
                        <div className={styles.cpf_container}>
                            <h5 className={styles.cpf}><strong>CPF: </strong></h5>
                            <p>178.831.147-78</p>
                        </div>
                        <div className={styles.cep_container}>
                            <h5 className={styles.cep}><strong>CEP: </strong></h5>
                            <p>28605-562</p>
                        </div>
                        <button className="btn btn-outline-primary">Editar</button>
                    </section>
                </div>
                <section>
                    <ul>
                        <li>
                            <p>cep: </p>
                            <p>info from api</p>
                        </li>
                        <li>logradouro</li>
                        <li>complemento</li>
                        <li>bairro</li>
                        <li>localidade</li>
                        <li>uf</li>
                        <li>ddd</li>
                    </ul>
                </section>

            </div>


            {/* Essas informções vão vir da API dos correios */}
            <div className={styles.secondary_info_wrapper}>

                <section>
                    tabela de carrinho
                </section>
                <section>
                    tabela de pedidos
                </section>
            </div>
        </div>
    )
}

export default Profile;