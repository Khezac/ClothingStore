import styles from './CollectionCard.module.css'

import autumn from '../../img/seasons_section3_cards/autumn_card.jpg'
import spring from '../../img/seasons_section3_cards/spring_card.jpg'
import summer from '../../img/seasons_section3_cards/summer_card.jpg'
import winter from '../../img/seasons_section3_cards/winter_card.jpg'

function CollectionCard (){
    return (
        <div className={styles.collection_wrapper}>
            <div className={styles.collection_container}>
                <img className={styles.collection_card} src={spring} alt='spring_card'/>
                <img className={styles.collection_card} src={summer} alt='summer_card'/>
                <img className={styles.collection_card} src={autumn} alt='autumn_card'/>
                <img className={styles.collection_card} src={winter} alt='winter_card'/>
            </div>
        </div>
    )
}

export default CollectionCard