import styles from './CartListItem.module.css'

function CartListItem({ key,img, produto, genero, tamanho, quantidade, preco }) {
    return (
        <div key={key}>
            <th className={styles.check_td}><input type='checkbox'/></th>
            <td>{img}</td>
            <td>{produto}</td>
            <td>{genero}</td>
            <td>{tamanho}</td>
            <td>{quantidade}</td>
            <td>{preco}</td>
        </div>
    )
}

export default CartListItem