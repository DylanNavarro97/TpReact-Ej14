import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombre}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombre}
          className="img-admin"
        />
      </td>
      <td className="text-center">{receta.categoria}</td>
      <td>{receta.nombre}</td>
      <td className="text-center">
        <Link to={`/administrador/editar/${receta.id}`} variant="warning" className="me-lg-2 btn btn-warning">
        <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
