import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./components/pages/Home";
import Sobre from './components/pages/Sobre'
import Atendimento from './components/pages/Atendimento'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import AlterarSenha2 from "./components/pages/AlterarSenha2";
import AlterarSenha1 from "./components/pages/AlterarSenha1";
import Profile from "./components/pages/Profile"
import BuyPage from "./components/products/BuyPage";

import ProductPage from "./components/products/ProductPage";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  const [buyProducts, setBuyProducts] = useState([])

  return (
    <Router>
      <Navbar/>        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/atendimento" element={<Atendimento/>}/>
          <Route path="/profile" element={<Profile setBuyProducts={setBuyProducts}/>}/>
          <Route path="/comprar" element={<BuyPage buyProducts={buyProducts} />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/alterarsenha1" element={<AlterarSenha1/>}/>
          <Route path="/alterarsenha2" element={<AlterarSenha2/>}/>
          <Route path="/produtos/:id" element={<ProductPage setBuyProducts={setBuyProducts} buyProducts={buyProducts}/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
