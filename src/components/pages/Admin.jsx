import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function Admin() {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary" to='/administrador/crear'>
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
          {/* Aca va el map de itemReceta */}
        </tbody>
      </Table>
    </section>
  )
}

export default Admin