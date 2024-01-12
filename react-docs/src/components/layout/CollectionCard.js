import styles from './CollectionCard.module.css'

import {Link} from 'react-router-dom'

function CollectionCard ({img, txt}){
    return (
        <div className={styles.collection_wrapper}>
            <img className={styles.collection_card} src={img} alt={`${txt}_card`}/>
            <div className={styles.go_to_collection}>
                <h3>Coleção de {txt}</h3>
                <Link to='/product'>
                    <button type="button" className="btn btn-info">Visitar Coleção</button>
                </Link>
            </div>
        </div>
    )
}

export default CollectionCard