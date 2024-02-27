import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import VistaReceta from './components/pages/VistaReceta';
import FormularioRecetas from './components/recetas/FormularioRecetas';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Inicio />}/>
          {/* <Route exact path="/" element={<FormularioRecetas/>}></Route> */}
          {/* <Route exact path="/" element={<VistaRecetas/>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      <VistaReceta/>
    </>
  )
}

export default App
