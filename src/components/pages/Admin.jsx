import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leerRecetasAPI } from "../../helpers/queries";
import ItemReceta from "../recetas/ItemReceta";
import "../../helpers/queries"

function Admin() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI();
  });

  const consultarAPI = async () => {
    try {
      const respuesta = await leerRecetasAPI();
      setRecetas(respuesta)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas?.map((receta) => (
            <ItemReceta key={receta.id} receta={receta}></ItemReceta>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default Admin;