import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemReceta = ({ receta }) => {

  const borrarReceta = () =>{
    Swal.fire({
      title: "¿Estas seguro de eliminar la receta?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Receta eliminada",
          text: `La Receta "${receta.nombre}" ha sido eliminada correctamente.`,
          icon: "success"
        });
      }
    });
  }

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
        <Button variant="danger" onClick={borrarReceta}>
        <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
