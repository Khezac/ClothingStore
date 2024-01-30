import CartTableItem from '../layout/CartTableItem'
import styles from './Profile.module.css'
import { useState, useEffect } from 'react'

function Profile() {

    const [user, setUser] = useState({})
    const [editedUser, setEditedUser] = useState({})
    const [pedidos, setPedidos] = useState([])
    const [cepInfo, setCepInfo] = useState([])
    const [profileForm, setProfileForm] = useState(false)

    // Identifica o usuário que está online
    const onlineUser = JSON.parse(localStorage.getItem("checkUser"))
    const onlineUserId = onlineUser.id

    // Pega as informaçoes da api do usuário que está online
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/usuarios/${onlineUserId}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setUser(data)
                    localStorage.setItem('onlineUserCep', data.cep)
                })
                .catch((err) => console.log(err))
        }, 1)
    }, [])

    // Altera visualização do Formulário de edição do perfil
    function editarPerfil() {
        setProfileForm(true)
    }

    // Armazena infos dos inputs em states
    function handleName(e) {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
        if (e.target.value === false && e.target.value === '') {
            setEditedUser({ ...editedUser, [e.target.name]: user.name })
        }
    }
    function handleTelephone(e) {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
    }
    function handleCEP(e) {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
    }

    // Manda as informações modificadas para a API
    function concluirEdição() {
        if (editedUser.cep) {
            if (editedUser.cep.length !== 8) {
                alert("O CEP inserido está errado ou incompleto.")
                return
            }
        }
        sendNewInfo(editedUser)
    }
    function sendNewInfo(state) {
        fetch(`http://localhost:5000/usuarios/${onlineUserId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(state)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                window.location.reload()
            })
            .catch((err) => console.log(err))
    }

    // Define o cep do usuário que está online
    const onlineCep = JSON.parse(localStorage.getItem('onlineUserCep'))

    // Pega infos da API dos correios e armazena em state
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${onlineCep}/json/`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then((data) => setCepInfo(data))
            .catch((err) => console.log(err))
    }, [])



    // Pega os pedidos na api, deverá filtrar os pedidos que tiverem apenas o id de quem está online
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/pedidos", {
                method: "GET",
                headers: { 'Content-Type': 'application/json', },
            })
                .then((resp) => resp.json())
                .then((data) => setPedidos(data))
                .catch((err) => console.log(err))
        }, 3)
    }, [])

    const pedidosUser = pedidos.filter(pedidos => (pedidos.cliente === user.id))

    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.personal_info_wrapper}>
                {user && (
                    <div className={styles.personal_info_container}>
                        <div className={styles.profile_avatar_container}>
                            <img className={styles.profile_avatar} src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt='profile_image' />
                        </div>
                        <section className={styles.personal_info}>
                            <div className={styles.name_container}>
                                <h5 className={styles.name}><strong>Nome: </strong></h5>
                                {profileForm ? (
                                    <input
                                        className={styles.edit_profile_form}
                                        type="text"
                                        name="nome"
                                        onChange={handleName}
                                        placeholder='Primeiro Nome'
                                        maxLength="16"
                                    />
                                ) : (
                                    <p>{user.nome}</p>
                                )}
                            </div>
                            <div className={styles.contact_container}>
                                <h5 className={styles.contact_number}><strong>Telefone: </strong></h5>
                                {profileForm ? (
                                    <input
                                        className={styles.edit_profile_form}
                                        type="tel"
                                        min='1'
                                        minLength="11"
                                        maxLength="11"
                                        name="telefone"
                                        onChange={handleTelephone}
                                        placeholder='55999990000'
                                    />
                                ) : (
                                    <p>{user.telefone}</p>
                                )}
                            </div>
                            <div className={styles.cep_search_container}>
                                <a href='https://www2.correios.com.br/sistemas/buscacep/buscacep.cfm' target='_blank'>Não sei meu cep.</a>
                            </div>
                            <div className={styles.email_container}>
                                <h5 className={styles.email}><strong>Email: </strong></h5>
                                <p>{user.id}</p>
                            </div>
                            <div className={styles.cep_container}>
                                <h5 className={styles.cep}><strong>CEP: </strong></h5>
                                {profileForm ? (
                                    <input
                                        className={styles.edit_profile_form}
                                        type="tel"
                                        min='1'
                                        maxLength="8"
                                        name="cep"
                                        onChange={handleCEP}
                                        placeholder='00000111'
                                    />
                                ) : (
                                    <p>{user.cep}</p>
                                )}
                            </div>
                            {profileForm ? (
                                <button className="btn btn-outline-primary" onClick={concluirEdição}>Concluir</button>
                            ) : (
                                <button className="btn btn-outline-primary" onClick={editarPerfil}>Editar</button>
                            )}
                        </section>
                    </div>
                )}
                <div className={styles.location_info_wrapper}>
                    <section className={styles.location_info}>
                        <div className={styles.cep_container}>
                            <h5 className={styles.cep}><strong>CEP: </strong></h5>
                            {cepInfo && cepInfo.cep ? (
                                <p>{cepInfo.cep}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                        <div className={styles.logradouro_container}>
                            <h5 className={styles.logradouro}><strong>Logradouro: </strong></h5>
                            {cepInfo && cepInfo.logradouro ? (
                                <p>{cepInfo.logradouro}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                        <div className={styles.complemento_container}>
                            <h5 className={styles.complemento}><strong>Complemento: </strong></h5>
                            {cepInfo && cepInfo.complemento ? (
                                <p>{cepInfo.complemento}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                        <div className={styles.bairro_container}>
                            <h5 className={styles.bairro}><strong>Bairro: </strong></h5>
                            {cepInfo && cepInfo.bairro ? (
                                <p>{cepInfo.bairro}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                        <div className={styles.localidade_container}>
                            <h5 className={styles.localidade}><strong>Localidade: </strong></h5>
                            {cepInfo && cepInfo.localidade ? (
                                <p>{cepInfo.localidade}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                        <div className={styles.unidade_federal_container}>
                            <h5 className={styles.unidade_federal}><strong>UF: </strong></h5>
                            {cepInfo && cepInfo.uf ? (
                                <p>{cepInfo.uf}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </div>
                    </section>
                </div>
            </div>
            <div className={styles.secondary_info_wrapper}>
                <div className={styles.cart_table_wrapper}>
                    <h2 className={styles.table_title}>Carrinho</h2>
                    <div className={styles.cart_table_container}>
                        <table className={styles.cart_table}>
                            <tbody>
                                <tr className={styles.cart_table_header}>
                                    <th className={styles.check_td}> - </th>
                                    <th className={styles.img_td}>Imagem</th>
                                    <th className={styles.name_td}>Produto</th>
                                    <th className={styles.gender_td}>Sexo</th>
                                    <th className={styles.size_td}>Tamanho</th>
                                    <th className={styles.amount_td}>Quantidade</th>
                                    <th className={styles.price_td}>Preço</th>
                                </tr>
                                {pedidosUser ? (pedidosUser.map((array) => (
                                    <tr className={styles.table_data} key={array.id}>
                                        <td className={styles.check_td}><input type='checkbox' /></td>
                                        <td> - </td>
                                        <td>{array.produto}</td>
                                        <td>{array.genero}</td>
                                        <td>{array.tamanho}</td>
                                        <td>{array.quantidade}</td>
                                        <td>{array.preco}</td>
                                    </tr>
                                ))) : (
                                    <tr>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
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
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;