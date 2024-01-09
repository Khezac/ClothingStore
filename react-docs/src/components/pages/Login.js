import { Link } from 'react-router-dom'

function Login(toggleHeader) {
    return (
        <>
        <Link to='/'>
        <button onClick={toggleHeader}>Retornar</button>
        </Link>
        <h1>Login</h1>
        </>
    );
}

export default Login;