import { Button } from "react-bootstrap";

const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombre}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombre}
          className="img-thumbnail"
        />
      </td>
      <td className="text-center">{receta.categoria}</td>
      <td>{receta.nombre}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
        <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
