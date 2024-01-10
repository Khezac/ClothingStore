import { Link } from 'react-router-dom'

function Cadastro(toggleHeader) {
    return (
        <>
        <Link to='/'>
        <button onClick={toggleHeader}>Retornar</button>
        </Link>
        <h1>Cadastro</h1>
        </>
    );
}

export default Cadastro;