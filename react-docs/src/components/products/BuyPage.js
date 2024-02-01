import styles from './BuyPage.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BuyPage() {

    const { id } = useParams()
    //  Não posso usar só 1 id, eu tenho que conseguir pegar um array de produtos com os produtos selecionados no carrinho,
    // pra fazer isso eu vou usar um state como prop e quando ele chegar aqui fazer um map dele, pra apresentar os produtos na pagina de compra
    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http/localhost:5000/pedidos/${id}`,{
                method:'GET',
                headers: {'Content-Type':'application/json',},
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        })
    })
    // ao invez de ter um produto eu vou fazer uma tabela igual a do carrinho, porém mais bonita :D
    return (
        <section className={styles.buypage_wrapper}>
            <div className={styles.buypage_container}>
                <div className={styles.product_info}>
                    <div className={styles.product_maininfo}>
                        <img src='data:image/jpeg;base64,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' className={styles.product_img} alt='product_image' />
                        <p className={styles.product_title}>Nome do produto</p>
                    </div>
                    <ul className={styles.product_info_list}>
                        <div>
                            <li className={styles.list_label}>Sexo:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>tamanho:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>quantidade:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>preço/unid:</li>
                            <li>qualquer coisa</li>
                        </div>
                    </ul>
                </div>
                <div className={styles.buy_info}>
                    <p className={styles.endereço_title}>Endereço:</p>
                    <ul className={styles.buy_info_list}>
                        <div>
                            <li className={styles.list_label}>UF:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>Localidade:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>Bairro:</li>
                            <li>qualquer coisa</li>
                        </div>
                        <div>
                            <li className={styles.list_label}>Logradouro</li>
                            <li>qualquer coisa</li>
                        </div>
                    </ul>
                    <p className={styles.endereço_title}>destinatário:</p>
                    <ul className={styles.destinatario_container}>
                        <li>
                            <p className={styles.list_label}>nome:{/*vai ser o nome do usuário que fez a compra e se não tiver será "sem informação" mas com botão de editar*/}</p>
                            <p>nome do candango</p>
                        </li>
                        <li>
                            <p className={styles.list_label}>telefone</p>
                            <p>telefone do candango</p>
                        </li>
                    </ul>
                    <div className={styles.price_container}>
                        <p>preço</p>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyPage;