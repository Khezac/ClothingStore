import styles from './SearchBar.module.css'

import { FaSearch } from "react-icons/fa";

function SearchBar({setResults,setToggleFocus}) {

    // Pega o que estiver sendo digitado
    function  handleSearch(e){
        handleFetch(e.target.value)
    }

    // Oque está sendo digitado vem da api pra state na Navbar.js por props
    function handleFetch(value){
        fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {'Content-Type': 'application/json',},
    })
    .then((resp) => resp.json())
    .then((data) => {const result = data.filter((product) => {
        return (
            value && 
            product && 
            product.name && 
            product.name.toLowerCase().includes(value)
        )
    }) 
    setResults(result)
    })
    .catch((err) => console.log(err))
    }

    // Altera visibilidade dos resultados com base no foco no input
    function handleFocusTime(){
        setTimeout(handleBlur,80)
    }
    function handleBlur(){
        setToggleFocus(false)
    }
    function handleFocus(){
        setToggleFocus(true)
    }

    return (
        <div className={styles.search_bar}>
            <input onFocus={handleFocus} onBlur={handleFocusTime} type='text' placeholder='Pesquise por um produto...' onChange={handleSearch}/>
            <a href='/' className={styles.btn_search}><FaSearch /></a>
        </div>
    )
}

export default SearchBar