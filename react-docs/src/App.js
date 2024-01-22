import Home from "./components/pages/Home";
import Sobre from './components/pages/Sobre'
import Atendimento from './components/pages/Atendimento'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'

import ProductPage from "./components/products/ProductPage";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AlterarSenha2 from "./components/pages/AlterarSenha2";
import AlterarSenha1 from "./components/pages/AlterarSenha1";

function App() {
  return (
    <Router>
      <Navbar/>        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/atendimento" element={<Atendimento/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/alterarsenha1" element={<AlterarSenha1/>}/>
          <Route path="/alterarsenha2" element={<AlterarSenha2/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/produtos/:id" element={<ProductPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
