import styles from './BuyPage.module.css'
import { useEffect, useState } from 'react'

function BuyPage({ buyProducts }) {

    const [user, setUser] = useState({})
    const [cepInfo, setCepInfo] = useState([])
    const [endereçoForm, setEndereçoForm] = useState(false)
    const [nameTelForm, setNameTelForm] = useState(false)
    const [finalPrice, setFinalPrice] = useState()

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

    // Define o cep do usuário que está online
    let onlineCep = ''
    if (user !== '') {
        onlineCep = JSON.parse(localStorage.getItem('onlineUserCep'))
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

    function toggleEndereçoForm() {
        setEndereçoForm(!endereçoForm)
    }

    function toggleNameTelForm() {
        setNameTelForm(!nameTelForm)
    }

    function handleUF(e) {
        setCepInfo({ ...cepInfo, [e.target.name]: e.target.value })
    }
    function handleLocalidade(e) {
        setCepInfo({ ...cepInfo, [e.target.name]: e.target.value })
    }
    function handleBairro(e) {
        setCepInfo({ ...cepInfo, [e.target.name]: e.target.value })
    }
    function handleLogradouro(e) {
        setCepInfo({ ...cepInfo, [e.target.name]: e.target.value })
    }
    function handleNumero(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function handleCep(e) {
        setCepInfo({ ...cepInfo, [e.target.name]: e.target.value })
    }
    function handleNome(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function handleTel(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    let eachOrderPrice = 0 
    let everyOrderPrice = 0
    let strOrderPrice = ''
    setTimeout(()=>{
        buyProducts.map((element)=>{
            eachOrderPrice = parseFloat(element.preco_pedido)
            everyOrderPrice += eachOrderPrice
            return strOrderPrice
        })
        strOrderPrice = everyOrderPrice.toFixed(2)
        setFinalPrice(strOrderPrice)
    },1)

    return (
        <section className={styles.buypage_wrapper}>
            <div className={styles.buypage_container}>
                <div className={styles.product_info} key='product_info'>
                    <p className={styles.product_info_title} key='product_table_label'>Produtos:</p>
                    <table className={styles.product_table} key='product_table'>
                        <thead key='product_table_header'>
                            <tr key='product_table_row'>
                                <th className={styles.table_header} key='product_table_data1'>Imagem</th>
                                <th className={styles.table_header} key='product_table_data2'>produto</th>
                                <th className={styles.table_header} key='product_table_data3'>Sexo</th>
                                <th className={styles.table_header} key='product_table_data4'>Tamanho</th>
                                <th className={styles.table_header} key='product_table_data5'>Quantidade</th>
                                <th className={styles.table_header} key='product_table_data6'>Preço/unid</th>
                            </tr>
                        </thead>
                        {buyProducts && buyProducts.map((element,index) => (
                            <tbody key={`product_table_body_${index}`}>
                                <tr className={styles.table_data} key={`cart_table_data_${index}`}>
                                    <td><img className={styles.img_td} src={element.img} alt={`imagem_do_produto_${index}`}/></td>
                                    <td>{element.produto}</td>
                                    <td>{element.genero}</td>
                                    <td>{element.tamanho}</td>
                                    <td>{element.quantidade}</td>
                                    <td>{element.preco_unid}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className={styles.buy_info}>
                    <div className={styles.endereço_title_container}>
                        <p className={styles.endereço_title}>Endereço:</p>
                        {!endereçoForm ? (
                            <img
                                className={styles.edit_button}
                                src='https://cdn-icons-png.flaticon.com/512/1159/1159727.png'
                                onClick={toggleEndereçoForm}
                                alt="pen_button"
                            />
                        ) : (
                            <img
                                className={styles.edit_button}
                                src='https://static.thenounproject.com/png/1668947-200.png'
                                onClick={toggleEndereçoForm}
                                alt="checked_button"
                            />
                        )}
                    </div>
                    <ul className={styles.buy_info_list}>
                        <li>
                            <h5 className={styles.endereço_title}>cep: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="cep"
                                    placeholder='12345678'
                                    maxLength="8"
                                    onChange={handleCep}
                                />
                            ) : cepInfo.cep ? (
                                <p>{cepInfo.cep}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <h5 className={styles.endereço_title}>localidade: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="localidade"
                                    placeholder='Municipio'
                                    maxLength="25"
                                    onChange={handleLocalidade}
                                />
                            ) : cepInfo.localidade ? (
                                <p>{cepInfo.localidade}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <h5 className={styles.endereço_title}>bairro: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="bairro"
                                    placeholder='Bairro'
                                    maxLength="25"
                                    onChange={handleBairro}
                                />
                            ) : cepInfo.bairro ? (
                                <p>{cepInfo.bairro}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <h5 className={styles.endereço_title}>logradouro: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="logradouro"
                                    placeholder='Rua, Condominio, etc.'
                                    maxLength="25"
                                    onChange={handleLogradouro}
                                />
                            ) : cepInfo.logradouro ? (
                                <p>{cepInfo.logradouro}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <h5 className={styles.endereço_title}>número: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="numero"
                                    placeholder='Ex:    29'
                                    maxLength="25"
                                    onChange={handleNumero}
                                />
                            ) : user.numero ? (
                                <p>{user.numero}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <h5 className={styles.endereço_title}>UF: </h5>
                            {endereçoForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="uf"
                                    placeholder='Estado Abreviado'
                                    maxLength="2"
                                    onChange={handleUF}
                                />
                            ) : cepInfo.uf ? (
                                <p>{cepInfo.uf}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                    </ul>
                    <div className={styles.endereço_title_container}>
                        <p className={styles.endereço_title}>Destinaráio:</p>
                        {!nameTelForm ? (
                            <img
                                className={styles.edit_button}
                                src='https://cdn-icons-png.flaticon.com/512/1159/1159727.png'
                                onClick={toggleNameTelForm}
                                alt="pen_button"
                            />
                        ) : (
                            <img
                                className={styles.edit_button}
                                src='https://static.thenounproject.com/png/1668947-200.png'
                                onClick={toggleNameTelForm}
                                alt="check_button"
                            />
                        )}
                    </div>
                    <ul className={styles.destinatario_container}>
                        <li>
                            <p className={styles.list_label}>nome:</p>
                            {nameTelForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="text"
                                    name="nome"
                                    placeholder='nome'
                                    maxLength="8"
                                    onChange={handleNome}
                                />
                            ) : user.nome ? (
                                <p>{user.nome}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                        <li>
                            <p className={styles.list_label}>telefone:</p>
                            {nameTelForm ? (
                                <input
                                    className={styles.edit_endereço_form}
                                    type="tel"
                                    name="telefone"
                                    placeholder='22999998888'
                                    maxLength="11"
                                    onChange={handleTel}
                                />
                            ) : user.telefone ? (
                                <p>{user.telefone}</p>
                            ) : (
                                <p>Sem informação</p>
                            )}
                        </li>
                    </ul>
                    <div className={styles.price_container}>
                    {buyProducts ? (
                        <p className={styles.price_value}><strong>Preço Final:</strong> R${finalPrice} </p>
                    ) : (
                        <p className={styles.price_value}><strong>Preço Final:</strong> Sem Informação </p>
                    )}
                    
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BuyPage;