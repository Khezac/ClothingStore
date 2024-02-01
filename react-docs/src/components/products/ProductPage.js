import styles from './ProductPage.module.css'
import ClothCard from '../layout/ClothCard'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SizeInput from './SizeInput'
import GenderInput from './GenderInput'
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom'

function ProductPage() {
    // Pega o id da URL
    const { id } = useParams()

    // Redireciona para outra pagina
    const navigate = useNavigate()

    // Gera id aleatório para os pedidos
    const randomId = uuidv4()

    // States que armazenam todas as informações necessarias
    const [todosProdutos, setTodosProdutos] = useState([])
    const [produto, setProduto] = useState()
    const [mainImage, setMainImage] = useState()
    const [sizes, setSizes] = useState({})
    const [gender, setGender] = useState({})
    const [preferences, setPreferences] = useState()

    // Resgata as informações da API do produto especificado na URL
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/produtos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProduto(data)
                    setMainImage(data.imgs.img1)
                    setSizes(data.sizes)
                    setGender(data.gender)
                })
                .catch((err) => console.log(err))
        }, 1)
    }, [id])

    // Resgata as informações de todos os produtos da API e salva em states
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/produtos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setTodosProdutos(data)
                })
                .catch((err) => console.log(err))
        }, 1)
    }, [])

    // Altera a imagem principal
    function toggleMainImage(e) {
        if (mainImage !== e.target.src) {
            setMainImage(e.target.src)
        }
    }

    // Possibilita uso de metodos em objetos
    let everySize = Object.keys(sizes)
    let everyGender = Object.keys(gender)

    // Capta qual usuário está online no momento
    const user = JSON.parse(localStorage.getItem('checkUser'))
    let status = ''
    if (user !== null) {
        status = 'logado'
    }

    // Armazena as infos dos inputs nas states
    function handleSize(e) {
        setPreferences({ ...preferences, [e.target.name]: e.target.value })
    }
    function handleGender(e) {
        setPreferences({ ...preferences, [e.target.name]: e.target.value })
    }

    let produtoPreco, produtoQuantidade ,orderPrice
    function handleAmount(e) {
        if (status === 'logado') {
            produtoPreco = parseFloat(produto.price)
            produtoQuantidade = parseInt(e.target.value)
            orderPrice = produtoPreco * produtoQuantidade
            orderPrice = orderPrice.toFixed(2)
            setPreferences({
                ...preferences,
                [e.target.name]: e.target.value,
                "img": mainImage,
                "produto": produto.name,
                "detalhes": produto.description,
                "preco_unid": produto.price,
                "preco_pedido": orderPrice,
                "id": randomId,
                "cliente": user.id,
                "status": "Aguardando Pagamento",
            })
        } else {
            produtoPreco = parseFloat(produto.price)
            produtoQuantidade = parseInt(e.target.value)
            orderPrice = produtoPreco * produtoQuantidade
            orderPrice = orderPrice.toFixed(2)
            setPreferences({
                ...preferences,
                [e.target.name]: e.target.value,
                "img": mainImage,
                "produto": produto.name,
                "detalhes": produto.description,
                "preco_unid": produto.price,
                "preco_pedido": orderPrice,
                "id": randomId,
                "status": "Aguardando Pagamento",
            })
        }
    }

    function handleSubmit() {
        if (status === 'logado') {
            validateInputs()
        } else {
            navigate('/cadastro')
        }
    }

    function validateInputs() {
        if (preferences !== undefined) {
            if (preferences.quantidade && preferences.tamanho && preferences.genero) {
                if (preferences.quantidade < 100) {
                    sendPreferences(preferences)
                } else {
                    alert('Limite de unidades: 99')
                }
            } else {
                alert('É necessário preencher todas as opções!')
            }
        } else {
            alert('Por favor, preencha todas as opções necessárias!')
        }
    }

    // Envia as informações captadas para a API de pedidos
    function sendPreferences(preferences) {
        fetch("http://localhost:5000/pedidos", {
            method: 'POST',
            headers: { 'Content-type': 'application/json', },
            body: JSON.stringify(preferences),
        })
            .then((resp) => { resp.json() })
            .then((data) => {
                console.log(data)
                window.location.reload()
            })
            .catch((err) => console.log(err))
    }

    function reloadPage() {
        setTimeout(() => window.location.reload(), 1)

    }

    return (
        <div className={styles.product_page_wrapper}>
            <div className={styles.product_container}>
                {produto && (
                    <div className={styles.product_images_container}>
                        <ul className={styles.image_menu}>
                            <li key="img1"><img className={styles.image_menu_btn} src={produto.imgs.img1} alt='image_1' onClick={toggleMainImage} /></li>
                            <li key="img2"><img className={styles.image_menu_btn} src={produto.imgs.img2} alt='image_2' onClick={toggleMainImage} /></li>
                        </ul>
                        <div className={styles.main_image_container}>
                            <img src={mainImage} className={styles.main_image} alt='image_selected' />
                        </div>
                    </div>
                )}


                <div className={styles.product_info_container}>
                    {produto && (
                        <div>
                            <p className={styles.product_name} >{produto.name} - {produto.description}</p>
                        </div>
                    )}
                    <div>
                        <h3 key="size_title" className={styles.size_title}>Tamanhos:</h3>
                        <div key="size_radio_input_container" className={styles.size_radio_input_container}>
                            {everySize.length > 0 && everySize.map((array, element) => <SizeInput key={element} size={array} onChange={handleSize} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sex_title}>Sexo:</h3>
                        <div className={styles.sex_radio_input_container}>
                            {everyGender.length > 0 && everyGender.map((array, element) => <GenderInput key={element} gender={array} onChange={handleGender} />)}
                        </div>
                    </div>
                    <div className={styles.buy_section}>
                        {produto && (
                            <p className={styles.buy_price}><strong>{produto.price}</strong></p>
                        )}
                        <div className={styles.amount_wrapper}></div>
                        <label className={styles.amount_title} htmlFor='amount'>Quantidade:</label>
                        <div className={styles.amount_counter_container}>
                            <input className={styles.amount_counter} required name='quantidade' type="number" min='1' max='99' placeholder='1' onChange={handleAmount} />
                        </div>
                        <button className={`${styles.buy_btn} btn btn-primary`} onClick={handleSubmit}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={styles.other_products}>
                <h1 className={styles.other_products_title} key='other_products_title'>Outros Produtos:</h1>
                <ul className={styles.other_products_list} key='other_products_list'>
                    {todosProdutos ? (todosProdutos.map((array, element) =>
                        <div key={`product_key_${element}`}>
                            <ClothCard
                                id={array.id}
                                name={array.name}
                                description={array.description}
                                img={array.imgs.img1}
                                link={`produtos/${array.id}`}
                                key={element}
                                onclick={reloadPage}
                            />
                        </div>
                    )) : (
                        <></>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ProductPage