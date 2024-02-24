import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import rollingRecetasLogo from "../../assets/rollingRecetasLogo.png"

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img src={rollingRecetasLogo} alt="Logo de Pagina" className="img-fluid" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
