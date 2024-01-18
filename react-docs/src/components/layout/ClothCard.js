import { Link } from 'react-router-dom'
import styles from './ClothCard.module.css'

function ClothCard({name, img,id}) {
    return (
        <div className={styles.product_card_container} id={id}>
            <div className={styles.product_card_wrapper}>
                <div className={styles.card_sect1}> 
                    <img className={styles.product_card_image} src={img} alt={`card_product_${id}`}/>
                    <p className={styles.product_card_name}>{name}</p>
                </div>
                <div className={styles.buy_wrapper}>
                    <Link to='/produtos'>
                        <button type="button" className="btn btn-info">Comprar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClothCard