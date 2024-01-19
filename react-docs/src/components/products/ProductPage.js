import styles from './ProductPage.module.css'
import ClothCard from '../layout/ClothCard'
import { useEffect, useState } from 'react'

function ProductPage() {

    const [mainImage, setMainImage] = useState('https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg')
    const [product, setProduct] = useState({})
    const [buyInfo, setBuyInfo] = useState({})

    function handleImage(e) {
        setMainImage(e.target.src)
    }
    function handleSize(e) {
        setBuyInfo({ ...buyInfo, [e.target.name]: e.target.value })
    }
    function handleGender(e) {
        setBuyInfo({ ...buyInfo, [e.target.name]: e.target.value })
    }
    function handleAmount(e) {
        setBuyInfo({ ...buyInfo, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        fetch('http://localhost:5000/produtos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/JSON', },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((err) => console.log(err))
        },[])

        console.log(product)
    return (
        <div className={styles.product_page_wrapper}>
            <div className={styles.product_container}>
                <div className={styles.product_images_container}>
                    <ul className={styles.image_menu}>
                        <li><img className={styles.image_menu_btn} src='' alt='camisa_preta' onClick={handleImage} /></li>
                        <li><img className={styles.image_menu_btn} src='' alt='camisa_preta' onClick={handleImage} /></li>
                        <li><img className={styles.image_menu_btn} src='' alt='camisa_preta' onClick={handleImage} /></li>
                    </ul>
                    <div className={styles.main_image_container}>
                        <img src={mainImage} className={styles.main_image} alt='camisa_preta' />
                    </div>
                </div>
                <div className={styles.product_info_container}>
                    <p className={styles.product_name}>Camisa básica edição de verão</p>
                    <div>
                        <h3 className={styles.size_title}>Tamanhos:</h3>
                        <form onChange={handleSize} className={styles.size_radio_input_container}>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_pp'>PP</label>
                                <input className={styles.size_input} type='radio' id='size_pp' name='size' value='PP' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_p'>P</label>
                                <input className={styles.size_input} type='radio' id='size_p' name='size' value='P' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_m'>M</label>
                                <input className={styles.size_input} type='radio' id='size_m' name='size' value='M' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_g'>G</label>
                                <input className={styles.size_input} type='radio' id='size_g' name='size' value='G' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_gg'>GG</label>
                                <input className={styles.size_input} type='radio' id='size_gg' name='size' value='GG' required />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3 className={styles.gender_title}>Sexo:</h3>
                        <form onChange={handleGender} className={styles.gender_radio_input_container}>
                            <div className={styles.gender_input_container}>
                                <label className={styles.gender_label} htmlFor='gender_1'>Masculino</label>
                                <input className={styles.gender_input} type='radio' id='gender_1' name='gender' value='masculino' required />
                            </div>
                            <div className={styles.gender_input_container}>
                                <label className={styles.gender_label} htmlFor='gender_2'>Feminino</label>
                                <input className={styles.gender_input} type='radio' id='gender_2' name='gender' value='feminino' required />
                            </div>
                            <div className={styles.gender_input_container}>
                                <label className={styles.gender_label} htmlFor='gender_3'>Unisex</label>
                                <input className={styles.gender_input} type='radio' id='gender_3' name='gender' value='unisex' required />
                            </div>
                        </form>
                    </div>
                    <div className={styles.buy_section}>
                        <div className={styles.price_section}>
                            <p className={styles.buy_price}><strong>R$29,90</strong></p>
                            <form onChange={handleAmount} className={styles.buy_amount_container}>
                                <label className={styles.buy_amount_label} htmlFor='amount'>Quantidade:</label>
                                <div className={styles.buy_amount_input_container}>
                                    <input className={styles.buy_amount} type='number' id='amount' name='amount' min={1} placeholder='1' />
                                </div>
                            </form>
                        </div>
                        <div className={styles.buy_button_container}>
                            <button className={`${styles.buy_btn} btn btn-primary`}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.other_products}>
                <h1 className={styles.other_products_title}>Outros Produtos:</h1>
                <ul className={styles.other_products_list}>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' /></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' /></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' /></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' /></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' /></li>
                </ul>
            </div>
        </div>
    )
}
export default ProductPage