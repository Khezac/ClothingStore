import styles from './SearcResult.module.css'

import { useNavigate } from 'react-router-dom'

function SearcResult({ results }) {

    const navigate = useNavigate()

    return (
        <div className={styles.results_list}>
            {results &&
                results.map((result, index) => {
                    return <div onClick={()=>{navigate(`/produtos/${result.id}`)}} className={styles.search_result} key={index}>{result.name} {result.description}</div>
                })
            }
        </div>
    )
}

export default SearcResult;