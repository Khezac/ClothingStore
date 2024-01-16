// import Input from '../form/Input'
import styles from './ProductPage.module.css'

function ProductPage(){
    return (
        <div className={styles.product_page_wrapper}>
            <div className={styles.product_images_container}>
                <img src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' className={styles.main_image}/>
                <ul className={styles.image_menu}>
                    <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt=''/></li>
                    <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt=''/></li>
                    <li><img className={styles.image_menu_btn} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt=''/></li>
                </ul>
            </div>
            <div className={styles.product_info_container}>
                <p>Nome do produto</p>
                <p>Preço</p>
                <div className={styles.product_info_size}>
                    <h3>Tamanhos:</h3>
                    <div className={styles.size_radioinput_container}>
                        <label hrmlFor=''>
                            <input type='radio' name='size_radio' value='P' required checked/>
                             P
                        </label>
                        <label hrmlFor=''>
                            <input type='radio' name='size_radio' value='PP' required/>
                             PP
                        </label>
                        <label hrmlFor=''>
                            <input type='radio' name='size_radio' value='M' required/>
                             M
                        </label>
                        <label hrmlFor=''>
                            <input type='radio' name='size_radio' value='G' required/>
                             G
                        </label>
                        <label hrmlFor=''>
                            <input type='radio' name='size_radio' value='GG' required/>
                             GG
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage