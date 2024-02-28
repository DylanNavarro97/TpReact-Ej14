import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import rollingRecetasLogo from "../../assets/rollingRecetasLogo.png"

const Menu = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioRecetasRolling")) || []


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
          <img src={rollingRecetasLogo} alt="Logo de Pagina" className="img-fluid" width={100} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>

            {usuario !== 'admin@recetasrolling.com' ? 
            <></> 
            : 
            <NavLink end className="nav-link" to="/administrador">
              Administrador
            </NavLink>}
            
            {usuario === 'admin@recetasrolling.com' ? 
            <></> 
            :
            <NavLink end className="nav-link" to="/login">
              Login
            </NavLink>
          }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
