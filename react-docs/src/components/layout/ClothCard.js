import styles from './ClothCard.module.css'

function ClothCard() {
    return (
        <div className={styles.product_card_container}>
            <div className={styles.product_card_wrapper}>
                <div className={styles.card_sect1}> 
                    <img className={styles.product_card_image} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt='card_product'/>
                    <p className={styles.product_card_name}>Nome do produto</p>
                </div>
                <a href='/' className={styles.buy_wrapper}>
                    <button type="button" className="btn btn-info">Comprar</button>
                </a>
            </div>
        </div>
    )
}

export default ClothCard