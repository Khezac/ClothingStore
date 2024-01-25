import styles from './Profile.module.css'

function Profile() {
    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.personal_info_wrapper}>
                <div className={styles.personal_info_container}>
                    <div className={styles.profile_avatar_container}>
                        <img className={styles.profile_avatar} src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt='profile_image' />
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
                        <div className={styles.cep_search_container}>
                            <a href='/'>Não sei meu cep.</a>
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
                <div className={styles.location_info_wrapper}>
                    <section className={styles.location_info}>
                        <div className={styles.cep_container}>
                            <h5 className={styles.cep}><strong>CEP: </strong></h5>
                            <p>info from api</p>
                        </div>
                        <div className={styles.logradouro_container}>
                            <h5 className={styles.logradouro}><strong>Logradouro: </strong></h5>
                            <p>info from api</p>
                        </div>
                        <div className={styles.complemento_container}>
                            <h5 className={styles.complemento}><strong>Complemento: </strong></h5>
                            <p>info from api</p>
                        </div>
                        <div className={styles.bairro_container}>
                            <h5 className={styles.bairro}><strong>Bairro: </strong></h5>
                            <p>info from api</p>
                        </div>
                        <div className={styles.localidade_container}>
                            <h5 className={styles.localidade}><strong>Localidade: </strong></h5>
                            <p>info from api</p>
                        </div>
                        <div className={styles.unidade_federal_container}>
                            <h5 className={styles.unidade_federal}><strong>UF: </strong></h5>
                            <p>info from api</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className={styles.secondary_info_wrapper}>
                <div className={styles.cart_table_wrapper}>
                    <h2 className={styles.table_title}>Carrinho</h2>
                    <div className={styles.cart_table_container}>
                        <table className={styles.cart_table}>
                            <tr className={styles.cart_table_header}>
                                <th className={styles.check_td}> - </th>
                                <th className={styles.img_td}>Imagem</th>
                                <th className={styles.name_td}>Produto</th>
                                <th className={styles.gender_td}>Sexo</th>
                                <th className={styles.size_td}>Tamanho</th>
                                <th className={styles.amount_td}>Quantidade</th>
                                <th className={styles.price_td}>Preço</th>
                            </tr>
                            <tr className={styles.table_data}>
                                <th className={styles.check_td}><input type='checkbox' /></th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <p className={styles.amount_selected}><strong>Selecionados: </strong>5</p>
                        <button className="btn btn-primary">Finalizar Compra</button>
                    </div>
                </div>
                <div className={styles.order_table_wrapper}>
                    <h2 className={styles.table_title}>Pedidos</h2>
                    <div className={styles.order_table_container}>
                        <table className={styles.order_table}>
                            <tr className={styles.order_table_header}>
                                <th className={styles.img_td}>Imagem</th>
                                <th className={styles.name_td}>Produto</th>
                                <th className={styles.status_td}>Status</th>
                                <th className={styles.details_td}>Detalhes</th>
                            </tr>
                            <tr className={styles.table_data}>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;