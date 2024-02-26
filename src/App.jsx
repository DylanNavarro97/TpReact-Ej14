import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';
import Admin from './components/pages/Admin';
import FormularioRecetas from './components/recetas/FormularioRecetas';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Inicio />}/>  
          <Route exact path='/administrador' element={<Admin />}/>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<FormularioRecetas/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <FormularioRecetas/>
    </>
  )
}

export default App
