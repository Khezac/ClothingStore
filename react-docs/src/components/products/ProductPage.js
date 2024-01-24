import styles from './ProductPage.module.css'
import ClothCard from '../layout/ClothCard'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SizeInput from './SizeInput'
import GenderInput from './GenderInput'

function ProductPage() {

    const { id } = useParams()

    const [todosProdutos, setTodosProdutos] = useState([])
    const [produto, setProduto] = useState()
    const [mainImage, setMainImage] = useState()
    const [sizes, setSizes] = useState({})
    const [gender, setGender] = useState({})

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

    function toggleMainImage(e) {
        if (mainImage !== e.target.src) {
            setMainImage(e.target.src)
        }
    }

    let everySize = Object.keys(sizes)
    let everyGender = Object.keys(gender)

    return (
        <div className={styles.product_page_wrapper}>
            <div className={styles.product_container}>
                <div className={styles.product_images_container}>
                    {produto && (
                        <>
                            <ul className={styles.image_menu}>
                                <li><img className={styles.image_menu_btn} src={produto.imgs.img1} alt='image_1' onClick={toggleMainImage} /></li>
                                <li><img className={styles.image_menu_btn} src={produto.imgs.img2} alt='image_2' onClick={toggleMainImage} /></li>
                            </ul>
                            <div className={styles.main_image_container}>
                                <img src={mainImage} className={styles.main_image} alt='image_selected' />
                            </div>
                        </>
                    )}

                </div>
                <div className={styles.product_info_container}>
                    {produto && (
                        <>
                            <p className={styles.product_name}>{produto.name} - {produto.description}</p>
                        </>
                    )}
                    <div>
                        <h3 className={styles.size_title}>Tamanhos:</h3>
                        <div className={styles.size_radio_input_container}>
                            {everySize.length > 0 && everySize.map((everySize) => <SizeInput size={everySize} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sex_title}>Sexo:</h3>
                        <div className={styles.sex_radio_input_container}>
                            {everyGender.length > 0 && everyGender.map((everyGender) => <GenderInput gender={everyGender} />)}
                        </div>
                    </div>
                    <div className={styles.buy_section}>
                        <p className={styles.buy_price}>{produto && (<strong>{produto.price}</strong>)}</p>
                        <button className={`${styles.buy_btn} btn btn-primary`}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={styles.other_products}>
                <h1 className={styles.other_products_title}>Outros Produtos:</h1>
                <ul className={styles.other_products_list}>
                    {todosProdutos ? (todosProdutos.map((array) => 
                        <>
                            <ClothCard
                                id={array.id}
                                name={array.name}
                                description={array.description}
                                img={array.imgs.img1}
                                link={`produtos/${array.id}`}
                            />
                        </>
                    )) : (
                        <></>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ProductPage