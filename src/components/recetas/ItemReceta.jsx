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
        />
      </td>
      <td className="text-center">{receta.categoria}</td>
      <td>{receta.nombre}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2"></Button>
        <Button variant="danger"></Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
