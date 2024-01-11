import Home from "./components/pages/Home";
import Sobre from './components/pages/Sobre'
import Atendimento from './components/pages/Atendimento'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/atendimento" element={<Atendimento/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
