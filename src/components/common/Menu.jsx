import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import rollingRecetasLogo from "../../assets/rollingRecetasLogo.png"
import { useEffect, useState } from "react";

const Menu = () => {
  const [verifUsuario, setVerifUsuario] = useState(false)
  const location = useLocation();
  
  const desloguearUsuario = () => {
    sessionStorage.clear()
    setVerifUsuario(false)
  }
  
  useEffect(() => {
    if (location.pathname === '/logueado'){
      setVerifUsuario(true)
    }
  }, [location])

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

            {verifUsuario ? 
            <NavLink end className="nav-link" to="/administrador">
            Administrador
            </NavLink>
            : 
            <></>
            }
            
            {verifUsuario ? 
            <>
            <NavLink end className="nav-link" to="/" onClick={desloguearUsuario}>
              Logout
            </NavLink>
            </> 
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
