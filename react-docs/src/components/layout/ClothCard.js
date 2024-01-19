import { Link } from 'react-router-dom'
import styles from './ClothCard.module.css'

<<<<<<< Updated upstream
function ClothCard() {
=======
function ClothCard({ name, img, id, handleClick, link, description }) {

>>>>>>> Stashed changes
    return (
        <div className={styles.product_card_container}>
            <div className={styles.product_card_wrapper}>
<<<<<<< Updated upstream
                <div className={styles.card_sect1}> 
                    <img className={styles.product_card_image} src='https://i.pinimg.com/originals/65/24/eb/6524ebe9ab6dd4e82cd32f36688d1eaf.jpg' alt='card_product'/>
                    <p className={styles.product_card_name}>Nome do produto</p>
                </div>
                <div className={styles.buy_wrapper}>
                    <Link to='/product'>
                        <button type="button" className="btn btn-info">Comprar</button>
=======
                <div className={styles.card_sect1}>
                    <img className={styles.product_card_image} src={img} alt={`card_product_${id}`} />
                    <div className={styles.product_card_name_container}>
                        <p className={styles.product_card_name}>{name}</p>
                        <p className={styles.product_card_description}>{description}</p>
                    </div>
                </div>
                <div className={styles.buy_wrapper}>
                    <Link to={`/${link}`}>
                        <button type="button" onClick={handleClick} className="btn btn-info">Comprar</button>
>>>>>>> Stashed changes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClothCard