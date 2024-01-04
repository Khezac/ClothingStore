import Container from './Container.js'

function Navbar(){
    return(
        <>
            <Container>
                <p>Logo</p>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Carrinho</li>
                    <li>Entrar</li>
                    <li>Cadastrar</li>
                </ul>
            </Container>
        </>
    )
}

export default Navbar