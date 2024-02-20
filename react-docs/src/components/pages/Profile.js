import styles from './Profile.module.css'
import { useState, useEffect } from 'react'

import trashIcon from '../../img/icones/126468.png'
import { useNavigate } from 'react-router-dom'

function Profile({setBuyProducts}) {

    const [user, setUser] = useState({})
    const [editedUser, setEditedUser] = useState({})
    const [pedidos, setPedidos] = useState([])
    const [cepInfo, setCepInfo] = useState([])
    const [profileForm, setProfileForm] = useState(false)
    const [totalValue, setTotalValue] = useState(0)
    const [productAmount, setProductAmount] = useState([])

    const navigate = useNavigate()

    // Identifica o usuário que está online
    const onlineUser = JSON.parse(localStorage.getItem("checkUser"))
    const onlineUserId = onlineUser.id

    // Pega as informaçoes da api do usuário que está online
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://clothingstore-api.vercel.app/usuarios/${onlineUserId}`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setUser(data)
                    localStorage.setItem('onlineUserCep', data.cep)
                })
                .catch((err) => console.log(err))
        }, 3)
    }, [onlineUserId])

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
            if (editedUser.cep.length !== 8 || isNaN(editedUser.cep)) {
                alert("O CEP inserido está errado ou incompleto.")
                return
            }
        }
        sendNewInfo(editedUser)
    }
    function sendNewInfo(state) {
        fetch(`https://clothingstore-api.vercel.app/usuarios/${onlineUserId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(state)
        })
            .then((resp) => resp.json())
            .then((data) => {
                localStorage.setItem('onlineUserCep', data.cep)
            })
            .catch((err) => console.log(err))
        window.location.reload()
    }

    // Define o cep do usuário que está online
    let onlineCep = ''
    if (user !== '') {
        onlineCep = localStorage.getItem('onlineUserCep')
    }

    // Pega infos da API dos correios e armazena em state
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://viacep.com.br/ws/${onlineCep}/json/`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json', },
            })
                .then((resp) => resp.json())
                .then((data) => setCepInfo(data))
                .catch((err) => console.log(err))
        }, 4)
    }, [onlineCep])

    // Pega os pedidos na api, deverá filtrar os pedidos que tiverem apenas o id de quem está online
    useEffect(() => {
        setTimeout(() => {
            fetch("https://clothingstore-api.vercel.app/pedidos", {
                method: "GET",
                headers: { 'Content-Type': 'application/json', },
            })
                .then((resp) => resp.json())
                .then((data) => setPedidos(data))
                .catch((err) => console.log(err))
        }, 3)
    }, [])

    // Filtra os pedidos do usuário online no momento
    const pedidosUser = pedidos.filter(pedidos => (pedidos.cliente === user.id))

    // Valor total dos itens selecionados no carrinho
    let selectedOrders = []
    let valorInput = 0
    function handleCheck(e) {
        valorInput += parseFloat(e.target.value)
        if (e.target.checked) {
            setTotalValue(prev => { return prev += valorInput; })
        } else if (e.target.checked === false) {
            setTotalValue(prev => { return prev -= valorInput; })
        }
        const selectedInputs = document.querySelectorAll('input[type="checkbox"]:checked')
        selectedOrders = Array.from(selectedInputs).map(x => x.name)
        setProductAmount(selectedOrders)
    }


    function handleBuy() {
        const selectedInputs = document.querySelectorAll('input[type="checkbox"]:checked')
        selectedOrders = Array.from(selectedInputs).map(x => x.name)

        selectedOrders.map((element) => handleFetch(element))
        setTimeout(() => {
            navigate('/comprar')
        }, 200);
    }

    let selectedOrdersToBeSent = []
    function handleFetch(value){
        fetch("https://clothingstore-api.vercel.app/pedidos", {
        method: "GET",
        headers: {'Content-Type': 'application/json',},
    })
    .then((resp) => resp.json())
    .then((data) => {const result = data.filter((product) => {
        return (
            value && 
            product && 
            product.id && 
            product.id.includes(value)
        )
    }) 
    selectedOrdersToBeSent.push(...result)
    
    })
    .catch((err) => console.log(err))
    setBuyProducts(selectedOrdersToBeSent)
    }

    // Deleta determinado pedido
    function handleDelete(e) {
        fetch(`https://clothingstore-api.vercel.app/pedidos/${e.target.id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then(() => {
                window.location.reload()
            })
            .catch((err) => console.log(err))
    }

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
                                ) : user.nome ? (
                                    <p>{user.nome}</p>
                                ) : (
                                    <p>Sem informação</p>
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
                                ) : user.telefone ? (
                                    <p>{user.telefone}</p>
                                ) : (
                                    <p>Sem informação</p>
                                )}
                            </div>
                            <div className={styles.cep_search_container}>
                                <a href='https://www2.correios.com.br/sistemas/buscacep/buscacep.cfm' rel='noreferrer' target='_blank'>Não sei meu cep.</a>
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
                                ) : user.cep ? (
                                    <p>{user.cep}</p>
                                ) : (
                                    <p>Sem informação</p>
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
                        <table className={styles.cart_table} key='cart_table'>
                            <tbody key="cart_table_body">
                                <tr className={styles.cart_table_header} key='cart_header_tr'>
                                    <th className={styles.check_td}> - </th>
                                    <th className={styles.img_td}>Imagem</th>
                                    <th className={styles.name_td}>Produto</th>
                                    <th className={styles.gender_td}>Sexo</th>
                                    <th className={styles.size_td}>Tamanho</th>
                                    <th className={styles.amount_td}>Quantidade</th>
                                    <th className={styles.price_td}>Preço/unid</th>
                                    <th className={styles.price_td}>Preço/pedido</th>
                                    <th className={styles.delete_td}>Excluir</th>
                                </tr>
                                {pedidosUser !== '' ? (pedidosUser.map((array, index) => (
                                    <tr className={styles.table_data} key={`cart_table_data_${index}`}>
                                        <td className={styles.check_td}><input type='checkbox' name={array.id} value={array.preco_pedido} id={index} onClick={handleCheck} /></td>
                                        <td><img className={styles.img_td} src={array.img} alt={`imagem_do_produto_${index}`}/></td>
                                        <td>{array.produto}</td>
                                        <td>{array.genero}</td>
                                        <td>{array.tamanho}</td>
                                        <td>{array.quantidade}</td>
                                        <td>R$ {array.preco_unid} </td>
                                        <td>R$ {array.preco_pedido} </td>
                                        <td className={styles.delete_td}><img id={array.id} alt={`lata_de_lixo_${index}`} className={styles.delete_td_img} onClick={handleDelete} src={trashIcon} /></td>
                                    </tr>
                                ))) : (
                                    <tr className={styles.table_data} key='cart_table_data'>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.selected_and_price}>
                        <div>
                            {productAmount > 0 ? (
                                <p className={styles.amount_selected}><strong>Selecionados: </strong>{productAmount.length}</p>
                            ) : (
                                <p className={styles.amount_selected}><strong>Selecionados: </strong>{productAmount.length}</p>
                            )}

                            <button className="btn btn-primary" onClick={handleBuy}>Finalizar Compra</button>
                        </div>
                        <div>
                            {totalValue ? (
                                <p className={styles.amount_selected_price}><strong>Valor Total: R$ </strong>{totalValue.toFixed(2)}</p>
                            ) : (
                                <p className={styles.amount_selected_price}><strong>Valor Total: R$ </strong>00.00</p>
                            )}

                        </div>
                    </div>
                </div>
                <div className={styles.order_table_wrapper}>
                    <h2 className={styles.table_title}>Pedidos</h2>
                    <div className={styles.order_table_container}>
                        <table className={styles.order_table} key="order_table">
                            <tbody key="order_table_body">
                                <tr className={styles.order_table_header} key='order_table_header'>
                                    <th className={styles.img_td}>Imagem</th>
                                    <th className={styles.name_td}>Produto</th>
                                    <th className={styles.details_td}>Detalhes</th>
                                    <th className={styles.status_td}>Status</th>
                                </tr>
                                {pedidosUser !== '' ? (pedidosUser.map((array, index) => (
                                    <tr className={styles.table_data} key={`order_table_data_${index}`}>
                                        <td><img className={styles.img_td} src={array.img} alt={`imagem_do_produto_${index}`}/></td>
                                        <td>{array.produto}</td>
                                        <td>{array.detalhes} - {array.genero} - {array.tamanho}</td>
                                        <td>{array.status}</td>
                                    </tr>
                                ))) : (
                                    <tr className={styles.table_data} key="order_table_data">
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
