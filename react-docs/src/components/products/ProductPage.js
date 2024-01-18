import styles from './ProductPage.module.css'
import ClothCard from '../layout/ClothCard'

function ProductPage() {
    return (
        <div className={styles.product_page_wrapper}>
            <div className={styles.product_container}>
                <div className={styles.product_images_container}>
                    <ul className={styles.image_menu}>
                        <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt='camisa_preta' /></li>
                        <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt='camisa_preta' /></li>
                        <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt='camisa_preta' /></li>
                    </ul>
                    <img src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' className={styles.main_image} alt='camisa_preta' />
                </div>
                <div className={styles.product_info_container}>
                    <p className={styles.product_name}>Camisa básica edição de verão</p>
                    <div>
                        <h3 className={styles.size_title}>Tamanhos:</h3>
                        <div className={styles.size_radio_input_container}>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_pp'>PP</label>
                                <input className={styles.size_input} type='radio' id='size_pp' name='size_radio' value='PP' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_p'>P</label>
                                <input className={styles.size_input} type='radio' id='size_p' name='size_radio' value='P' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_m'>M</label>
                                <input className={styles.size_input} type='radio' id='size_m' name='size_radio' value='M' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_g'>G</label>
                                <input className={styles.size_input} type='radio' id='size_g' name='size_radio' value='G' required />
                            </div>
                            <div className={styles.size_input_container}>
                                <label className={styles.size_label} htmlFor='size_gg'>GG</label>
                                <input className={styles.size_input} type='radio' id='size_gg' name='size_radio' value='GG' required />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sex_title}>Sexo:</h3>
                        <div className={styles.sex_radio_input_container}>
                            <div className={styles.sex_input_container}>
                                <label className={styles.sex_label} htmlFor='sex_1'>Masculino</label>
                                <input className={styles.sex_input} type='radio' id='sex_1' name='sex_radio' value='sex1' required />
                            </div>
                            <div className={styles.sex_input_container}>
                                <label className={styles.sex_label} htmlFor='sex_2'>Feminino</label>
                                <input className={styles.sex_input} type='radio' id='sex_2' name='sex_radio' value='sex2' required />
                            </div>
                            <div className={styles.sex_input_container}>
                                <label className={styles.sex_label} htmlFor='sex_3'>Unisex</label>
                                <input className={styles.sex_input} type='radio' id='sex_3' name='sex_radio' value='sex3' required />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buy_section}>
                        <p className={styles.buy_price}><strong>R$29,90</strong></p>
                        <button className={`${styles.buy_btn} btn btn-primary`}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={styles.other_products}>
                <h1 className={styles.other_products_title}>Outros Produtos:</h1>
                <ul className={styles.other_products_list}>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg'/></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg'/></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg'/></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg'/></li>
                    <li className={styles.other_products_item}><ClothCard id='1' name='camisa basica' img='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg'/></li>
                </ul>
            </div>
        </div>
    )
}
export default ProductPage