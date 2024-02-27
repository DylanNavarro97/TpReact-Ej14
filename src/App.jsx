import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import VistaReceta from './components/pages/VistaReceta';
import Error404 from './components/pages/Error404';
import Admin from './components/pages/Admin';
import FormularioRecetas from './components/recetas/FormularioRecetas';
import RegistroAdm from './components/pages/RegistroAdm';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Inicio />}/>  
          <Route exact path='/administrador' element={<Admin />}/>
          <Route exact path="/administrador/crear" element={<FormularioRecetas editar={false}/>} />
          <Route exact path="/administrador/editar/:id" element={<FormularioRecetas editar={true}/>}/>
          <Route exact path="/registro" element={<RegistroAdm/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
